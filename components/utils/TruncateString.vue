<template>
  <div>
    {{ truncateText(value, length) }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    default: 10,
  },
});

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text; // No need to truncate
  } else {
    return text.slice(0, maxLength) + "..."; // Truncate and add ellipsis
  }
}
</script>

<style scoped></style>
