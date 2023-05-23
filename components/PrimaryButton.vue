<template>
  <button class="flex items-center gap-x-2">
    <span> {{ label }}</span>

    <i :class="icon"></i>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: "Button Label",
  },
  icon: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
