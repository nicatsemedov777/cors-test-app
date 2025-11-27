import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,             // allows external access (important)
    port: 5173,             // your dev port
    allowedHosts: [
      'leqalimza.az',
      'www.leqalimza.az',
      '161.35.208.15',      // your server IP (optional)
      'vite'                // for docker/nginx internal proxy (optional)
    ]
  }
})
