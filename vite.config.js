import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'public/pages',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        landing: 'src/landing.jsx',
        register: 'src/register.jsx',
        login: 'src/login.jsx',
      },
    },
  },
  server: {
    open: '/pages/index.html',
  },
});
