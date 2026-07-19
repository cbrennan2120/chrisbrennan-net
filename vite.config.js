import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        animals: resolve(import.meta.dirname, 'animals/index.html'),
        bodybuilding: resolve(import.meta.dirname, 'bodybuilding/index.html'),
        esports: resolve(import.meta.dirname, 'esports/index.html')
      }
    }
  }
});
