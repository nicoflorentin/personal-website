import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <--- 1. Importar path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <--- 2. Agregar el alias
    },
  },
  build: {
    rollupOptions: {
      external: ['icons.jsx'],
    },
  },
})