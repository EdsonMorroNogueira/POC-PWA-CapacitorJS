import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    VitePWA({
      includeAssets: ['CompressJPEG.online_512x512_image.png', 'final-image.png', 'screenshot1.png', 'screenshot2.png'],
      manifest: {
        name: "poc-pwa",
        short_name:"pocPWA",
        description: "Poc para transformação de um web app feito em React & Tailwind",
        theme_color: '#ffc0cb',
        icons: [
          {
            src: 'public/assets/final-image.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any"
          },
          {
            src: 'public/assets/CompressJPEG.online_512x512_image.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: "public/assets/screenshot1.png",
            type: "image/png",
            sizes: "540x720",
            form_factor: "narrow"
          },
          {
            src: "public/assets/screenshot2.png",
            type: "image/png",
            sizes: "720x540",
            form_factor: "wide"
          }
        ]
      }
    })
  ],
})
