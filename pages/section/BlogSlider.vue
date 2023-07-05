<template>
  <PreLoader v-if="isLoading"></PreLoader>

  <div v-else>
    <div
      class="items-center p-10 text-3xl font-bold tracking-tight sm:text-4xl"
    >
      <h1 class="mt-6 text-center">
        Catch up with the Latest NFT News from around the world
      </h1>
    </div>
    <Splide
      :has-track="false"
      :options="options"
      aria-label="My Favorite Images"
      class=""
    >
      <SplideTrack>
        <SplideSlide v-for="(blog, index) in blogPosts" :key="index">
          <!-- <SimpleBlog
            :link="blog.link"
            :title="blog.title.rendered"
            :image="blog._embedded['wp:featuredmedia'][0].source_url"
            :content="blog.content.rendered"
          /> -->
          <BlogCard
            :link="blog.link"
            :title="blog.title.rendered"
            :image="blog._embedded['wp:featuredmedia'][0].source_url"
            :content="blog.content.rendered"
          />
        </SplideSlide>
      </SplideTrack>
      <button class="splide__toggle" type="button">
        <span class="splide__toggle__play"
          ><i class="fa-sharp fa-solid fa-play"></i
        ></span>
        <span class="splide__toggle__pause"
          ><i class="fa-sharp fa-solid fa-pause"></i
        ></span>
      </button>
      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
    </Splide>
    <div class="grid place-content-center py-10">
      <nuxt-link
        to="/blog"
        class="rounded-md px-2 text-sm font-semibold leading-10 hover:text-primary-200"
        >See More<span class="px-1"> <i class="fa fa-solid fa-down"></i></span>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import { useAppStore } from "~/store/appStore";
import SimpleBlog from "../section/BlogCard.vue";

import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";
import axios from "axios";
import PreLoader from "../../components/utils/PreLoader.vue";
import BlogCard from "../section/BlogCard.vue";

const appStore = useAppStore();

const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  pagination: true,
  arrows: true,
  perPage: 2,
  breakpoints: {
    1200: { perPage: 2, gap: "1rem", arrows: true },
    640: { perPage: 1, gap: 0, arrows: false },
  },

  autoplay: true,
};

type blogPostType = {
  id: number;
  title: { rendered: string };
  _embedded: { "wp:featuredmedia": { source_url: string }[] };
  content: { rendered: string };
  link: string;
};

const blogPosts = ref<blogPostType[]>();

const isLoading = ref(false);

function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "    ...";
  } else {
    return str;
  }
}

function fetchBlogPosts() {
  isLoading.value = true;

  const apiUrl =
    "https://blog.theniftycollective.com/wp-json/wp/v2/posts?_embed";

  axios
    .get(apiUrl)
    .then((response) => {
      blogPosts.value = response.data;
      isLoading.value = false;
    })
    .catch((error) => {
      console.error("Error fetching blog posts:", error);
      isLoading.value = false;
    });
}

onMounted(() => {
  fetchBlogPosts();
});
</script>

<style lang="scss" scoped>
.splide__progress__bar {
  height: 3px;
  @apply bg-primary-200;
}
</style>
