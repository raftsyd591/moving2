import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    // Compression plugin for gzip and brotli
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    // Image optimization
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      webp: {
        quality: 80,
      },
    }),
    // PurgeCSS to remove unused CSS
    // purgecss({
    //   content: ['./src/**/*.{jsx,tsx,js,ts,html}'],
    //   safelist: [/swiper/, /data-theme/, /fas/, /fab/, /animate/, /aspect/, /slick/],
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  // Asset optimization
  build: {
    assetsInlineLimit: 10000, // 10kb - Inline small assets as base64
    sourcemap: false, // Disable sourcemaps in production
    cssCodeSplit: true, // Split CSS files
    chunkSizeWarningLimit: 1000, // Increase warning limit
    reportCompressedSize: false, // Disable compressed size reporting
    rollupOptions: {
      output: {
        // Manual chunks for vendor code splitting
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'swiper', 'react-helmet']
        },
        // Output file naming
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  // Static file handling
  publicDir: 'public',
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
}); 