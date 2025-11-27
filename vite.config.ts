import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/test/',     // IMPORTANT!
  server: {
    allowedHosts: [
      'leqalimza.az',
      'www.leqalimza.az'
    ],
    host: true,
    port: 5173
  }
})
