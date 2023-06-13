<script lang="ts" setup>
import { ref, onMounted } from "vue";
import TestimonialCard from "~/layouts/TestimonialCard.vue";
import { Testimonials } from "~/types/model";
import { register } from "swiper/element/bundle";

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
    image: "/nf 	t/nft5.png",
    description:
      "John Doe's leadership style fosters a positive and inclusive work environment. His genuine care for the well-being of employees has helped create a strong team dynamic. It's a pleasure being part of his team.",
    star: 5,
  },
]);

register();

onMounted(() => {
  const swiperEl = document.querySelector("swiper-container") as any;

  const params = {
    injectStyles: [
      `
      .swiper-pagination-bullets.swiper-pagination-horizontal{
        display: none;
      }
      `,
    ],
    pagination: {
      clickable: false,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: false,
  };

  Object.assign(swiperEl, params);

  swiperEl.initialize();
  console.log(swiperEl);
});
</script>

<template>
  <div>
    <swiper-container class="mySwiper" :init="false">
      <swiper-slide v-for="(item, index) in testimonials" :key="index">
        <TestimonialCard
          :name="item.name"
          :description="item.description"
          :position="item.position"
          :star="item.star"
          :image="item.image"
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
