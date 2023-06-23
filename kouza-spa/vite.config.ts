import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Components({
    resolvers: [
      AntDesignVueResolver({
        importStyle: false, // css in js
      }),
    ],
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    cors: true,
    proxy: {
      '/dev-api': {
        target: 'http://localhost:8001',
        secure: false,
        changeOrigin: true, //this one is declare for cross
        rewrite: (path) => {
          console.log(path)
          return path.replace(/^\/dev-api/, '')
        }
      },
      '/pro-api': {
        target: 'http://www.vuelearn.com',
        secure: false,
        changeOrigin: true, //this one is declare for cross
        rewrite: (path) => {
          console.log(path)
          return path.replace(/^\/pro-api/, '')
        }
      }
    }
  }
})
