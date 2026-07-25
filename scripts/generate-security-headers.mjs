import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDirectory = path.join(projectRoot, 'dist');
const inlineScriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;

async function findIndexPages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      pages.push(...await findIndexPages(entryPath));
    } else if (entry.isFile() && entry.name === 'index.html') {
      pages.push(entryPath);
    }
  }

  return pages;
}

function hashInlineScript(source) {
  return `'sha256-${createHash('sha256').update(source, 'utf8').digest('base64')}'`;
}

const pages = (await findIndexPages(distDirectory)).sort();

if (pages.length === 0) {
  throw new Error('No generated index.html pages were found in dist.');
}

const scriptHashes = new Set();
let inlineScriptCount = 0;

for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const relativePage = path.relative(distDirectory, page).replaceAll('\\', '/');
  let match;

  while ((match = inlineScriptPattern.exec(html)) !== null) {
    const [, attributes, source] = match;

    if (/\bsrc\s*=/i.test(attributes)) {
      continue;
    }

    const typeMatch = attributes.match(/\btype\s*=\s*(["'])application\/ld\+json\1/i);

    if (!typeMatch) {
      throw new Error(`Unexpected executable inline script found in ${relativePage}.`);
    }

    try {
      JSON.parse(source.trim());
    } catch (error) {
      throw new Error(`Invalid JSON-LD found in ${relativePage}: ${error.message}`);
    }

    inlineScriptCount += 1;
    scriptHashes.add(hashInlineScript(source));
  }
}

if (inlineScriptCount === 0) {
  throw new Error('No inline JSON-LD scripts were found to authorize in the CSP.');
}

const hashes = [...scriptHashes].sort().join(' ');
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self' https://fonts.gstatic.com",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "img-src 'self' data:",
  "media-src 'self'",
  "object-src 'none'",
  `script-src 'self' ${hashes}`,
  "script-src-attr 'none'",
  "style-src 'self' https://fonts.googleapis.com",
  "style-src-attr 'none'",
  "worker-src 'none'",
  'upgrade-insecure-requests'
].join('; ');

const headers = `/*
  Content-Security-Policy: ${contentSecurityPolicy}
  Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
  Referrer-Policy: strict-origin-when-cross-origin
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
`;

await writeFile(path.join(distDirectory, '_headers'), headers, 'utf8');

console.log(`Generated security headers for ${pages.length} pages with ${inlineScriptCount} JSON-LD hashes.`);
