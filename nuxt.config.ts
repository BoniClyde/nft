// require('./env.ts');
export default defineNuxtConfig({
  runtimeConfig: {
    serverUrl: process.env.VITE_SERVER_URL,
  },
  devtools: { enabled: true },
  
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head:{
      link:[{
        rel: "stylesheet",
        href:"/assets/fa/css/all.min.css"

      }]
    }
  },
  css: [
    "@/assets/main.css",
    "vue-json-debug/src/debug.css",
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@formkit/nuxt",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["PerViewSlider", "SwiperControls", "debug-dock"].includes(tag),
    },
  },

  colorMode: {
    classSuffix: "",
  },

  image: {
    // Options
  },
});
