import path from 'path'
import { NuxtConfig } from '@nuxt/types'
require('dotenv').config()
require('isomorphic-fetch')

const config: NuxtConfig = {
  srcDir: './client/',
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/normalize.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  router: {
    middleware: 'auth'
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    'nuxt-vite'
  ],
  vite: {},
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  server: {
    port: 8081,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname)
    }
  },
  extensions: ['vue', 'js', 'ts'],
  build: {
    additionalExtensions: ['ts', 'tsx'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

export default config
