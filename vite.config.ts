import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  publicDir: 'public',
  server: {
    allowedHosts: ['3am.tail20e7c5.ts.net'],
    watch: {
      usePolling: true
    }
  },
  optimizeDeps: {
    include: ['front-matter']
  }
})
