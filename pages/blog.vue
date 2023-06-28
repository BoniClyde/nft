<script lang="ts" setup>
import PreLoader from "@/components/utils/PreLoader.vue";
 definePageMeta({
  name: "blog",
}); 

import axios from "axios";

const blogPosts = ref([]);

const isLoading = ref(false);

function fetchBlogPosts() {
  isLoading.value = true;

  const apiUrl = "https://blog.theniftycollective.com/wp-json/wp/v2/posts?_embed";

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
        <div class="lg:px-4">
          <div>
            <h1 class="mb-4 text-justify text-xl font-bold">
              {{ blog.title.rendered }}
            </h1>
            <img :src="blog._embedded['wp:featuredmedia'][0].source_url" alt="Featured Image">
          </div>

          <div
            class="blog-content text-justify text-base"
            v-html="blog.content.rendered"
          ></div>
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
