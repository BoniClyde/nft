

<script setup lang="ts">
import { useAppStore } from "./store/appStore";

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




const runtimeConfig = useRuntimeConfig();


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
      <debug-dock/>
     
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

/* body {
  height: 100%;
  overflow-y: hidden;
  background-color: blueviolet;
} */
</style>
