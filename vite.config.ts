import { defineConfig } from 'vite'
/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': '/src/shared',
      '@entities': '/src/entities',
      '@features': '/src/features',
      '@widgets': '/src/widgets',
      '@pages': '/src/pages',
    },
  },
})
