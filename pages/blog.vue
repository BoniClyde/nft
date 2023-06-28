<script lang="ts" setup>
import PreLoader from "@/components/utils/PreLoader.vue";
definePageMeta({
  name: "blog",
});

import axios from "axios";
import Image from "../components/utils/Image.vue";

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

<template>
  <div class="container mx-auto px-4">
    <h2 class="theme-text mb-4 py-6 text-center text-2xl font-bold">
      Latest Blog Posts
    </h2>

    <PreLoader v-if="isLoading"></PreLoader>

    <div v-else>
      <div v-for="blog in blogPosts" :key="blog.id" class="mb-8">
        <div class="grid gap-x-4 md:grid-cols-5">
          <div class="col-span-2">
            <Image
              class="w-80 object-cover object-center"
              alt="Featured Image"
              :url="blog._embedded['wp:featuredmedia'][0].source_url"
            />
          </div>
          <div class="col-span-3">
            <h1 class="text-xl font-extrabold" v-text="blog.title.rendered" />
            <div
              class="blog-content text-justify text-base"
              v-html="truncateString(blog.content.rendered, 200)"
            ></div>
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
  </div>
</template>

<style scoped>
.blog-content {
  line-height: 1.5;
}
</style>
