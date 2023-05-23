<template>
  <div>
    <Header />
    <slot />
    <FooterArea />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import FooterArea from "./FooterArea.vue";
</script>
