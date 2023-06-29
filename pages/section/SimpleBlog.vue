<template>
  <div class="container mx-auto px-4">
    <h2 class="theme-text mb-4 py-6 text-center text-2xl font-bold">
      Latest Blog Posts
    </h2>

    <div>
      <div class="mb-8">
        <div class="grid gap-x-4 md:grid-cols-5">
          <div class="col-span-2">
            <Image
              class="w-80 object-cover object-center"
              alt="Featured Image"
              :url="props.image"
            />
          </div>
          <div class="col-span-3">
            <h1 class="text-xl font-extrabold">{{ props.title }}</h1>
            <div class="blog-content text-base">
              {{ props.content }}
            </div>
            <NuxtLink
              class="py-2 text-sm text-primary-400"
              target="_blank"
              :to="props.button"
            >
              Read Article
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Blog Title",
    required: true,
  },
  content: {
    type: String,
    default: "Blog content",
    required: true,
  },
  image: {
    type: String,
    default: "nft/user.png",
    required: false,
  },
  button: {
    type: String,
    default: "Read more",
    required: true,
  },
});
</script>

<style scoped>
.blog-content {
  line-height: 1.5;
}
</style>
