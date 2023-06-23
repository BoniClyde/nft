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
    dock:{
      hideIfNoSlots: false,
      // position: "bottom",
    },
  } as {
    registerDebugComponent: boolean;
    components: {
      before?: Record<string, any>;
      after?: Record<string, any>;
    };
    dock?: {
      // position: "top" | "bottom";
      // hideIfNoSlots?: boolean;
      // slotTitleLimit?: number;
    }
  });
});
