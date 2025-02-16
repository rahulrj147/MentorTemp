import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Ensures PostCSS configuration is used
  },
  server: {
    port: 3000, // Set the port to 3000
  },
});
