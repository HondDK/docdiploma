// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  alias: {
    "@": '../src'
  },

  dir: {
    pages: './src/app/routes'
  },

  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/eslint'],

  shadcn: {
    prefix: '',
    componentDir: './src/shared/ui'
  }
})