require('./env.ts');
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  css: ["~/assets/main.css", "~/assets/fa/css/all.min.css"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@formkit/nuxt',
    '@nuxt/image',
  ],
  plugins: [
    {
      src: '@/plugins/extend-nuxt.ts',
      mode: 'client'
    }
  ],
  
  vue:{
    compilerOptions:{
      isCustomElement: tag => ["swiper-slide","swiper-container"].includes(tag)

    }
  },
  
  colorMode: {
    classSuffix: ''
  },
  devtools: {
    enabled: true
  },
  image: {
    // Options
  }

})


