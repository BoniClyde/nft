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
  ogUrl: "https://collectivesmarket.com",
  twitterTitle: appStore.appConfigData.metaUrl,
  twitterDescription: appStore.appConfigData.description,
  twitterImage: appStore.appConfigData.metaUrl,
});
</script>

<template>
        <Head>
      <Title>{{ appStore.appConfigData.company_name }} | {{ appStore.appConfigData.slogan }}</Title>
      <Link rel="icon" href="/logo.svg" />
 
 </Head>

  <NuxtLayout
    :transition="{
      name: 'bounce',
      mode: 'out-in',
    }"
  >
    <NuxtPage />
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
