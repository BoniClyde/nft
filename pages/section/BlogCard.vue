<template>
  <div class="container mx-auto px-4">
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
            <p v-html="truncateString(props.content, 100)" class="blog-content text-base"/>
            <NuxtLink
              class="py-2 text-sm text-primary-400"
              target="_blank"
              :to="props.link"
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
import Image from '../../components/utils/Image.vue';

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
  link: {
    type: String,
    default: "Read more",
    required: true,
  },
});

function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "    ...";
  } else {
    return str;
  }
}
</script>

<style scoped>
.blog-content {
  line-height: 1.5;
}
</style>
