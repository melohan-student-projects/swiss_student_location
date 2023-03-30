import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: '/src/components'
      },
      {
        find: '@config',
        replacement: '/src/config'
      },
      {
        find: '@utils',
        replacement: '/src/utils'
      },
      {
        find: '@assets',
        replacement: '/src/assets'
      },
      {
        find: '@pages',
        replacement: '/src/pages'
      },
      {
        find: '@services',
        replacement: '/src/services'
      }
    ]
  }
});
