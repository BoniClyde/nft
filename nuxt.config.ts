// require('./env.ts');
export default defineNuxtConfig({

  serverMiddleware: [], // ["~/api/index.ts"],
  
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  css: [
    "~/assets/main.css",
    "~/assets/fa/css/all.min.css",
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
