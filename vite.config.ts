import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path';

import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    passWithNoTests: true,
    cache: false,
    watch: false,
    reporters: ['default'],
    outputFile: path.resolve(__dirname, './test-report.xml'),
    include: ['tests/**/*.spec.{js,ts}'],
    coverage: {
      all: false,
      enabled: true,
      reporter: ['json', 'lcov', 'text', 'clover', 'text-summary'],
      include: ['src/components/**/*.vue'],
      exclude: ['**/node_modules/**']
    }
  }
})
