<script setup lang="ts">
import { useAppStore } from "./store/appStore";
// register Swiper custom elements
import { register } from "swiper/element/bundle";

register();

const appStore = useAppStore();
useSeoMeta({
  ogTitle: appStore.appConfigData.slogan,
  description: appStore.appConfigData.description,
  ogDescription: appStore.appConfigData.description,
  ogImage: appStore.appConfigData.metaUrl,
  twitterCard: "summary_large_image",
  lang: "en",
  ogUrl: appStore.appConfigData.company_url,
  twitterTitle: appStore.appConfigData.metaUrl,
  twitterDescription: appStore.appConfigData.description,
  twitterImage: appStore.appConfigData.metaUrl,
});


useHead({

  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js",
    },
  ],
});
const runtimeConfig = useRuntimeConfig();

onMounted(() => {
  // console.log(runtimeConfig.value)
});
</script>

<template>
  <Head>
    <Title
      >{{ appStore.appConfigData.company_name }} |
      {{ appStore.appConfigData.slogan }}</Title
    >
    <Link rel="icon" href="/logo.svg" />
  </Head>

  <NuxtLayout
    :transition="{
      name: 'bounce',
      mode: 'out-in',
    }"
  >
    <div class="theme-text dark:bg-secondary-950">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
