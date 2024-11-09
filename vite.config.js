import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // use "describe", "expect", etc etc, without importing them in our test files
    environment: "jsdom", // makes our test work better as if they are in the browser 
    setupFiles: "src/setupTest.js" // do any test config before tests run. Runs once before ANY tests , not once before each test file. 
  }
})
