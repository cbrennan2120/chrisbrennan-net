# Brennan Brand Website Design

## Goal

Build a Netlify-ready prototype for Brennan's personal bodybuilding brand and first-show journey. The site should feel cinematic, disciplined, and high contrast while staying easy to update when real show photos and exact copy are available.

## Structure

- Hero: full-viewport stage-inspired opening with headline, CTAs, and brand logo.
- My Story: concise narrative plus four story pillars.
- Prep Timeline: weeks-out milestones through show day.
- Featured Competition Gallery: large image slots with hover captions.
- Behind the Scenes: prep content categories for meals, pump room, check-ins, coaching, and travel.
- Journal: four article cards for post-show and prep reflections.
- Future Goals: next show, improvements, and offseason focus.
- Contact / Socials: Instagram, TikTok, X, Facebook, and collaboration CTA.

## Visual System

- Background: near-black navy/charcoal.
- Accent: electric mint/cyan.
- Secondary accent: periwinkle blue.
- Typography: bold all-caps headings, clean sans-serif body text.
- Imagery: existing Brennan brand images are used now; real competition photos can replace gallery placeholders later.

## Technical Plan

Use Vite + React for a static single-page app, with `netlify.toml` configured for Netlify. Keep content arrays in `src/App.jsx` so sections can be updated without hunting through markup. CSS lives in `src/styles.css` with responsive rules for desktop and mobile.
