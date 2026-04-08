import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Isso libera o acesso para o celular (Network) sem precisar de plugins extras
    host: true,
    port: 5173,
  },
})