<script setup>
import Header from "./Header.vue";
import FooterArea from "./FooterArea.vue";

import { useAppStore } from "~/store/appStore";
</script>

<template>
  <div>
    <Header />
    <slot />
    <FooterArea />
  </div>
</template>
