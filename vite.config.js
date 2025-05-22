import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: import.meta.env.VITE_APP_BASE_URL || '/',  // Use import.meta.env for Vite environment variables
  plugins: [react()],
});