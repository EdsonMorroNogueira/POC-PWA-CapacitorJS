import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['screenshot1.png', 'screenshot2.png'],
      manifest: {
        name: "poc-pwa",
        short_name:"pocPWA",
        description: "Poc para transformação de um web app feito em React & Tailwind",
        theme_color: '#ffc0cb',
        background_color: '#ffffff',
        icons: [
          {
            src: "assets/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "assets/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "assets/pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "assets/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        screenshots: [
          {
            src: "assets/screenshot1.png",
            type: "image/png",
            sizes: "540x720",
            form_factor: "narrow"
          },
          {
            src: "assets/screenshot2.png",
            type: "image/png",
            sizes: "720x540",
            form_factor: "wide"
          }
        ]
      }
    })
  ],
})
