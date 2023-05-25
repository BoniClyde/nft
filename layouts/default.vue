<script setup>
import Header from "./Header.vue";
import FooterArea from "./FooterArea.vue";

import { useAppStore } from "~/store/appStore";

const appStore = useAppStore();

console.log(appStore.appConfigData.company_name);


useSeoMeta({
  ogTitle: appStore.appConfigData.slogan,
  description:appStore.appConfigData.description,
  ogDescription: appStore.appConfigData.description,
  ogImage:appStore.appConfigData.metaUrl,
  twitterCard: 'summary_large_image',
  lang: 'en',
  ogUrl: 'https://collectivesmarket.com',
  twitterTitle: appStore.appConfigData.metaUrl,
  twitterDescription: appStore.appConfigData.description,
  twitterImage: appStore.appConfigData.metaUrl,
})
</script>


<template>
  <div>
    <Head>
      <Title>{{ appStore.appConfigData.company_name }} | {{ appStore.appConfigData.slogan }}</Title>
      <Link rel="icon" href="public/logo.svg" />
 
 </Head>

    
    <Header />
    <slot />
    <FooterArea />
  </div>
</template>

