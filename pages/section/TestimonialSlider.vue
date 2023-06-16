<script lang="ts" setup>
import { Testimonials } from "~/types/model";
import TestimonialCard from "~/layouts/TestimonialCard.vue";

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

<template>
  <swiper-container
    :space-between="10"
    :breakpoints="{
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }"
    :slides-per-view="2"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in 8" class="bg-red-500"
      >Slide 3</swiper-slide
    >
  </swiper-container>
</template>

<!-- <style lang="scss" scoped>
@import "@/swiper/modules/pagination/pagination.scss";

.swiper-pagination-bullet {
  background: #fff;
  opacity: 1;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
}
</style>
 -->
