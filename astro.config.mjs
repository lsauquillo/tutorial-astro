import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    }
  }
});

