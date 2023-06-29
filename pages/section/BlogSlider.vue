<template>
  <div v-if="isLoading"></div>
  <div v-else>
    <Splide
      :has-track="false"
      :options="options"
      aria-label="My Favorite Images"
      class=""
    >
      <SplideTrack>
        <!--  <SplideSlide v-for="(item, index) in article" :key="index">
      <SimpleBlog
            :title="item.title"
            :content="item.content"
            :image="item.image"
          />
        </SplideSlide> -->
        <SplideSlide v-for="(blog, index) in blogPosts" :key="index">
          <div>
            <div class="mb-8">
              <div class="grid gap-x-4 md:grid-cols-5">
                <div class="col-span-2">
                  <Image
                    class="w-80 object-cover object-center"
                    alt="Featured Image"
                    :url="blog._embedded['wp:featuredmedia'][0].source_url"
                  />
                </div>
                <div class="col-span-3">
                  <h1 class="text-xl font-extrabold">
                    {{ blog.title.rendered }}
                  </h1>
                  <p
                    v-html="truncateString(blog.content.rendered, 100)"
                    class="blog-content text-base"
                  />
                  <NuxtLink
                    class="py-2 text-sm text-primary-400"
                    target="_blank"
                    :to="blog.link"
                  >
                    Read Article
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
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
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import { useAppStore } from "~/store/appStore";
import SimpleBlog from "../section/SimpleBlog.vue";

import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";
import axios from "axios";
import Image from "../../components/utils/Image.vue";

const appStore = useAppStore();

const article = [
  {
    title: "@ArtisticSoul",
    content: "Digital Artist",
    image: "nft/nft5.png",
    button: `${appStore.appConfigData.company_name} has provided me with an incredible platform to showcase and sell my digital artwork. The seamless user experience and extensive community support have made it the go-to marketplace for artists like me.`,
  },
  {
    title: "@ArtisticSoul",
    content: "Digital Artist",
    image: "nft/nft5.png",
    button: `${appStore.appConfigData.company_name} has provided me with an incredible platform to showcase and sell my digital artwork. The seamless user experience and extensive community support have made it the go-to marketplace for artists like me.`,
  },
];
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

<!-- <script lang="ts" setup>
import SimpleBlog from "../section/SimpleBlog.vue";
import Image from "../components/utils/Image.vue";
import PreLoader from "@/components/utils/PreLoader.vue";

import axios from "axios";

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
</script> -->
<style lang="scss" scoped>
.splide__progress__bar {
  height: 3px;
  @apply bg-primary-200;
}
</style>
