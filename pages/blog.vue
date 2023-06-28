<template>
  <div class="container mx-auto px-4">
    <h2 class="theme-text mb-4 py-6 text-center text-2xl font-bold">
      Latest Blog Posts
    </h2>

    <div v-for="blog in blogPosts" :key="blog.id" class="mb-8">
      <div class="lg:px-4">
        <div>
          <h1 class="mb-4 text-justify text-xl font-bold">
            {{ blog.title.rendered }}
          </h1>
        </div>

        <div
          class="blog-content text-justify text-base"
          v-html="blog.content.rendered"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  name: "blog",
});

import axios from "axios";

export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  mounted() {
    this.fetchBlogPosts();
  },
  methods: {
    fetchBlogPosts() {
      const apiUrl = "https://blog.theniftycollective.com/wp-json/wp/v2/posts";

      axios
        .get(apiUrl)
        .then((response) => {
          this.blogPosts = response.data;
        })
        .catch((error) => {
          console.error("Error fetching blog posts:", error);
        });
    },
  },
};
</script>

<style scoped>
.blog-content {
  line-height: 1.5;
}
</style>
