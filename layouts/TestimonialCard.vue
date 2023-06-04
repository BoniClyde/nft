<template>
  <section class="px-6 py-24 sm:py-32 lg:px-8">
    <figure class="mx-auto max-w-2xl">
      <div class="flex gap-x-1 text-primary-500">
        <i
          v-for="(item, index) in star"
          :key="index"
          class="fa-solid fa-star"
        ></i>
      </div>
      <blockquote
        class="mt-10 text-xl leading-8 tracking-tight sm:text-2xl sm:leading-9"
      >
        <p>{{ description }}</p>
      </blockquote>
      <figcaption class="mt-10 flex h-14 w-14 items-center">
        <img class="rounded-full" :src="image" alt="" />
        <div class="flex-col justify-center px-2 text-sm leading-6">
          <div class="font-semibold">{{ name }}</div>
          <div class="max-w-auto mt-1 whitespace-nowrap">{{ position }}</div>
        </div>
      </figcaption>
    </figure>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: "John Doe",
    required: true,
  },
  position: {
    type: String,
    default: "CEO",
    required: true,
  },
  image: {
    type: String,
    default: "/nft/nft3.png",
    required: false,
  },
  description: {
    type: String,
    default:
      "Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.",
    required: true,
  },
  star: {
    type: Number,
    default: 3,
    required: true,
  },
});
</script>
