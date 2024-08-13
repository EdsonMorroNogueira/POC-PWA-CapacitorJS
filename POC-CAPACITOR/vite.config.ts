import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    VitePWA({
      includeAssets: ['src/assets/CompressJPEG.online_512x512_image.png', 'src/assets/cropped.jpg'],
      manifest: {
        name: "poc-pwa",
        short_name:"pocPWA",
        description: "Poc para transformação de um web app feito em React & Tailwind",
        theme_color: '#ffc0cb',
        icons: [
          {
            src: 'src/assets/cropped.jpg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/CompressJPEG.online_512x512_image.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
