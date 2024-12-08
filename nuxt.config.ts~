import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  build: {
    transpile: ['vuetify']
  },
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  }],
  i18n: {
    locales: [
      { code: 'en', file: "en-US.json", language: 'en-US', name: 'English' },
      { code: 'fr', file: "fr-FR.json", language: 'fr-FR', name: 'Français' }
    ],
    defaultLocale: 'en',
    lazy: true
  },
  vite: {
    vue: {
      template: transformAssetUrls
    }
  }
})
