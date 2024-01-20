import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          particlesJs: ['src/assets/particlesJs/particles.js', 'src/assets/particlesJs/app.js'],
        },
      },
    },
  },
})
