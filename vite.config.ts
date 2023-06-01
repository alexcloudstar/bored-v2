import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), viteCompression()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
});
