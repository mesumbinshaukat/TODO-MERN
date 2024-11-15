import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v2": "http://localhost:5000", // Proxy API requests
    },
  },
  plugins: [react()],
})
