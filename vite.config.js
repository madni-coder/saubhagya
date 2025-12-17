import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const stripRadialProgressProperty = () => ({
  name: 'strip-radialprogress-property',
  enforce: 'pre',
  transform(code, id) {
    if (!id.endsWith('.css')) return null;
    const cleaned = code.replace(/@property\s+--radialprogress\s*{[^}]*}/g, '');
    return cleaned === code ? null : cleaned;
  },
});

export default defineConfig({
  plugins: [
    stripRadialProgressProperty(),
    react(),
    tailwindcss()
  ],
  css: {
    transformer: 'postcss',
    lightningcss: {
      drafts: {
        customProperties: true,
      },
    },
  },
  server: {
    host: true,
  },
  build: {
    cssMinify: false,
  },
});