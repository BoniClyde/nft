import { register } from "swiper/element/bundle";
export default defineNuxtPlugin((nuxt) => {
  const app = nuxt.vueApp;
  register();
});
