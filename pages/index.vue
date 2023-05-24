<template>
  <div class="container mx-auto">
    <HomeSection />
    <div class="custom-class overflow-x-auto">
      <TrendingSection />
    </div>
    <PopularNft />
    <EmailSection />
    <div v-if="false">
      <ImageSection />
    </div>
    <ReverseHero />
    <div v-if="false">
      <LogoSecurity />
    </div>
  </div>
</template>

<script setup lang="ts">
import EmailSection from "~/layouts/EmailSection.vue";
import HomeSection from "~/layouts/HomeSection.vue";
import PopularNft from "~/layouts/PopularNft.vue";
import TrendingSection from "~/layouts/TrendingSection.vue";
import ImageSection from "~/layouts/ImageSection.vue";
import ReverseHero from "~/layouts/ReverseHero.vue";
import LogoSecurity from "~/layouts/LogoSecurity.vue";
</script>

<style scoped>
.custom-class {
  padding-left: 0;
  padding-right: 0;
  margin-left: -1rem;
  margin-right: -1rem;
}
</style>
