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
  <div class="bg-red-500">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :loop="true"
      :centered-slides="true"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }"
    >
      <SwiperSlide v-for="(item, idx) in testimonials" :key="idx">
        <TestimonialCard
          :name="item.name"
          :description="item.description"
          :position="item.position"
          :star="item.star"
          :image="item.image"
        />
      </SwiperSlide>

      <SwiperControls />
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 40vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 10vh;
}
.swiper-cards {
  width: 240px;
  height: 140px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
