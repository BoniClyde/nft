<script setup lang="ts">
import { useImage } from "@vueuse/core";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  sizes: {
    type: String,
    default: "sm:100vw md:50vw lg:400px",
  },
  class: {
    type: String,
    default: "",
  },
});

const imageOptions = ref({
  src: props.url,
});

const { isLoading, error } = useImage(imageOptions);
</script>
<template>
  <div>
    <div v-if="isLoading" class="card is-loading">
      <div :class="class" class="card is-loading image" ></div>
    </div>
    <span v-else-if="error">failed</span>

    <nuxt-img
      v-else
      :src="imageOptions.src"
      loading="lazy"
      preload
      :class="class"
      :sizes="sizes"
      placeholder="nft/deafaultErrorImage.png"
    />
  </div>
</template>

<style scoped>


.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.622);

  .image {
    max-width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}

.card.is-loading {
  .image {
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    @apply bg-gradient-to-r from-secondary-800 via-secondary-600 to-secondary-800;
  }
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
