import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    // Optimize for production
    target: 'es2015',
    minify: 'esbuild', // Use esbuild (faster than terser)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion', 'react-intersection-observer'],
          icons: ['lucide-react'],
        },
      },
    },
    // Asset optimization
    assetsDir: 'assets',
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  // Esbuild options for optimization
  esbuild: {
    drop: ['console', 'debugger'], // Remove console.log in production
  },
  // Performance optimizations
  server: {
    hmr: {
      overlay: false,
    },
  },
  preview: {
    port: 3000,
    host: true,
  },
})
