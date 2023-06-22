import "vue-json-debug/src/debug.css";
import RouterInfo from "vue-json-debug/src/docks/RouterInfo.vue";
import ScreenSize from "vue-json-debug/src/docks/ScreenSize.vue";
import { useDebugPlugin } from "vue-json-debug/src/plugin";

export default defineNuxtPlugin((nuxt) => {
  const app = nuxt.vueApp;

  useDebugPlugin(app, {
    registerDebugComponent: true,
    components: {
      after: { ScreenSize, RouterInfo },
    },
  });
});
