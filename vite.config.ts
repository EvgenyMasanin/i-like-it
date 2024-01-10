/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@sheared': '/src/sheared',
      '@entities': '/src/entities',
      '@features': '/src/features',
      '@widgets': '/src/widgets',
      '@pages': '/src/pages',
    },
  },
})
