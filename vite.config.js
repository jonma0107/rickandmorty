import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jonma0107.github.io/rickandmorty/",
  plugins: [react()]
})
