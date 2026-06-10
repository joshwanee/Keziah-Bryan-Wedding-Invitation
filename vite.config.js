import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Updated manualChunks to use the required function syntax
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('leaflet') || id.includes('react-leaflet')) {
              return 'map';
            }
          }
        },
      },
    },
  },
});