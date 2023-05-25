require('./env.ts');
export default defineNuxtConfig({
  css: ["~/assets/main.css", "~/assets/fa/css/all.min.css"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  devtools: {
    enabled: true
  },

})
