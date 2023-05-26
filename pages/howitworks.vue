<script setup>
import { useAppStore } from "~/store/appStore";

const appStore = useAppStore();
useSeoMeta({
  ogTitle: appStore.appConfigData.slogan,
  description: appStore.appConfigData.description,
  ogDescription: appStore.appConfigData.description,
  ogImage:
    "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920",
  twitterImage:
    "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920",
});
</script>

<template>
  <Head>
    <Title>{{ appStore.appConfigData.company_name }} | How It Works </Title>
  </Head>
  <div class="bg-blue-950 p-10">How it Works page</div>
  <NuxtLink to="/about"> About page </NuxtLink>
</template>
