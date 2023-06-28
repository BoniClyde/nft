<template>
  <div class="container mx-auto">
    <HomeSection v-if="false" />
    <NftSimpleSlider v-if="false" />
    <TrendingSection v-if="false" />
    <ReverseHero v-if="false" />
    <TestimonialSlider v-if="false" />
    <EmailSection v-if="false" />
    <BlogSlider />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "home",
});

import EmailSection from "~/layouts/EmailSection.vue";
import HomeSection from "~/layouts/HomeSection.vue";
import TrendingSection from "~/layouts/TrendingSection.vue";
import ReverseHero from "~/layouts/ReverseHero.vue";
import TestimonialSlider from "~/pages/section/TestimonialSlider.vue";
import NftSimpleSlider from "~/pages/section/NftSimpleSlider.vue";
import BlogSlider from "./section/BlogSlider.vue";
</script>

<style scoped>
.custom-class {
  padding-left: 0;
  padding-right: 0;
  margin-left: -1rem;
  margin-right: -1rem;
}
</style>
