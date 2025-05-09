import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: "https://pragmant6.github.io/farmacia-ramos/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})
