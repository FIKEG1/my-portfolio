import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    // Makes the site installable as an app and available offline.
    // The service worker is only generated for production builds (npm run build).
    VitePWA({
      registerType: 'autoUpdate',
      // icon.svg is already covered by globPatterns below.
      includeAssets: ['apple-touch-icon.png'],
      manifest: {
        id: '/',
        name: 'Fikadu Guye | Portfolio',
        short_name: 'Fikadu',
        description:
          'Portfolio of Fikadu Guye, an aspiring full-stack developer building React, Node.js and PHP applications.',
        lang: 'en',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#f8fafc',
        theme_color: '#4f46e5',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        shortcuts: [
          { name: 'Projects', url: '/#projects' },
          { name: 'Contact', url: '/#contact' },
        ],
      },
      workbox: {
        // Cache the app shell and the optimized images. The original .jpg/.png
        // files in public/ are unused, so they are deliberately left out.
        globPatterns: ['**/*.{js,css,html,svg,webp}'],
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
