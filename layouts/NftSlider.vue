<!-- <template>
  <swiper
    :slidesPerView="'auto'"
    :centeredSlides="true"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper bg-primary-900"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <swiper-slide v-for="nft in nftCards" :key="nft.id">
      <NftCard
        class=""
        :id="nft.id"
        :name="nft.name"
        :src="nft.src"
        :price="nft.price"
      />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const modules = [Pagination];

type NftData = {
  id: string;
  name: string;
  src: string;
  price?: number;
};

const nftCards = ref<NftData[]>([
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9udWNsZWFyLW5lcmQuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vUHVibGljTWFyYXVkZXJzL1Zhbi5GaW5hbC5naWY=",
    price: 139.8,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNi5naWY=",
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNC5naWY=",
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yMi5naWY=",
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC8yTEZrMUJpenhDbm9hTGFzbkJwZkZNeEgxNDhDYUxVTTBVSjdfdVRWNGVr",
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920",
  },
  // Add more NFT cards here with their respective data
]);
</script>
 -->

 <template>
  <div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
<!-- 
        <TestimonialCard
        class="swiper-slide"
        :name="item.name"
        :description="item.description"
        :position="item.position"
        :star="item.star"
        v-for="(item, index) in testimonials"
        :key="index"
      /> -->
      <NftCard
      v-for="nft in nftCards" :key="nft.id"
      class="swiper-slide"
        :id="nft.id"
        :name="nft.name"
        :src="nft.src"
        :price="nft.price"
      />
      </div>
      <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import TestimonialCard from "~/layouts/TestimonialCard.vue";
import { Testimonials } from "~/types/model";

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
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js",
    },
  ],
});


type NftData = {
  id: string;
  name: string;
  src: string;
  price: number;
};

const nftCards = ref<NftData[]>([
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9udWNsZWFyLW5lcmQuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vUHVibGljTWFyYXVkZXJzL1Zhbi5GaW5hbC5naWY=",
    price: 139.8,
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNi5naWY=",
 price:0.4
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yNC5naWY=",
 price:0.4
  
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Ob3U3Q1B5M2tFUEVKeHJoM21XVXR5YktaQVNZeU10clN4a0RXalFWWVhSTS8yMi5naWY=",
    price:0.4
 
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9hcndlYXZlLm5ldC8yTEZrMUJpenhDbm9hTGFzbkJwZkZNeEgxNDhDYUxVTTBVSjdfdVRWNGVr",
 price:0.4
  
  },
  {
    id: "3333",
    name: "Looking Good4",
    src: "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&dpr=1&w=1920",
    price:0.4
 
  },
  // Add more NFT cards here with their respective data
]);

function onImageLoad() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  console.log("swiper", swiper);
}

onMounted(onImageLoad);

/* onMounted(() => {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
 */
</script>

<style>
.swiper {
 @apply border-2 p-4 
}

.swiper-slide {
@apply border-2 dark:bg-secondary-500   
}

.swiper-slide img {
 @apply h-80 w-full object-cover
}

.swiper-button-next, .swiper-button-prev {
  @apply  text-primary-400
}

</style>
