<template>
  <div class="container mx-auto">
    <HomeSection />
    <NftSimpleSlider />
    <TrendingSection />
    <ReverseHero />
    <TestimonialSlider />
    <EmailSection />
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


const {data} = await useFetch('/api/ninja')

console.log(data.value)
</script>

<style scoped>
.custom-class {
  padding-left: 0;
  padding-right: 0;
  margin-left: -1rem;
  margin-right: -1rem;
}
</style>
