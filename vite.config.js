import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components') // เพิ่มบรรทัดนี้ เพื่อเชื่อม compo
    },
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
})
