import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'leqalimza.az',
      'www.leqalimza.az',
      '161.35.208.15'
    ]
  }
})
