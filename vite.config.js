import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Debe ser el nombre exacto del repositorio entre barras
  base: '/Modalab-Classroom/', 
  build: {
    outDir: 'dist',
  }
})