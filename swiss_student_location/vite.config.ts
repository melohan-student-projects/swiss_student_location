import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(),
    ['plugin-vite', {
      build: {
        sourcemap: true,
      },
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['<rootDir>/swiss_student_location/src/setupTests.ts'],
      },
    }],],
})

