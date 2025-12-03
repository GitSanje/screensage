import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
// @ts-ignore 
import react from '@vitejs/plugin-react'
// @ts-ignore 
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
         '@shared': resolve('src/preload/shared')
      }
    },
    plugins: [react(),tailwindcss()]
  }
})
