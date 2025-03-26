import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      external: ['vite']
    },
    copyPublicDir: true
  },
  server: {
    port: 5173,
  },
}); 