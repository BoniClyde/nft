<template>
  <div>
    <!-- <HeaderArea /> -->
    Hello
    <HeaderArea />

    <slot />

    <FooterArea />
  </div>
</template>

<script setup>
import FooterArea from "./layout/FooterArea.vue";
import HeaderArea from "./layout/HeaderArea.vue";

// import HeaderArea from "./HeaderArea";
// import FooterArea from "./FooterArea";
</script>
