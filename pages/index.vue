<template>
  <div>
    <NativeSlider />
  
  <!--  <div class="container mx-auto">
    <HomeSection />
    <NftSimpleSlider />
    <div>
      <TrendingSection />
    </div>
    <ReverseHero />

    <TestimonialSlider />

    <EmailSection />
  </div> -->
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
import TestimonialCard from "~/layouts/TestimonialCard.vue";
import TestimonialSlider from "~/pages/section/TestimonialSlider.vue";
import NftSlider from "~/layouts/NftSlider.vue";
import NativeSlider from "./views/NativeSlider.vue";

type Testimonials = {
  name: string;
  position: string;
  image: string;
  description: string;
  star: number;
};

const testimonials = ref<Testimonials[]>([
  {
    name: "Jane Smith",
    position: "Marketing Manager",
    image: "/nft/nft1.png",
    description:
      "John Doe is an exceptional leader with a clear vision. His dedication and expertise have greatly contributed to the success of our company. It's a pleasure working under his guidance.",
    star: 5,
  },
  {
    name: "Michael Johnson",
    position: "Sales Representative",
    image: "/nft/nft2.png",
    description:
      "Working with John Doe has been a wonderful experience. His ability to motivate and inspire the team is truly remarkable. I'm grateful for the opportunity to learn from him.",
    star: 4,
  },
  {
    name: "Emily Williams",
    position: "Product Designer",
    image: "/nft/nft3.png",
    description:
      "John Doe is a creative thinker who always encourages innovation. His attention to detail and commitment to quality have greatly influenced my approach to design. I highly recommend him as a leader.",
    star: 5,
  },
  {
    name: "David Thompson",
    position: "Finance Manager",
    image: "/nft/nft4.png",
    description:
      "I've had the privilege of working closely with John Doe on several projects. His strategic mindset and problem-solving abilities have been instrumental in achieving our financial goals. He is a true asset to our organization.",
    star: 4,
  },
  {
    name: "Sophia Davis",
    position: "Human Resources Specialist",
    image: "/nft/nft5.png",
    description:
      "John Doe's leadership style fosters a positive and inclusive work environment. His genuine care for the well-being of employees has helped create a strong team dynamic. It's a pleasure being part of his team.",
    star: 5,
  },
]);
</script>

<style scoped>
.custom-class {
  padding-left: 0;
  padding-right: 0;
  margin-left: -1rem;
  margin-right: -1rem;
}
</style>
