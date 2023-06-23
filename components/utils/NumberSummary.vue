<template>
    <div class="flex flex-col items-center">
      <div class="flex gap-x-2">
        <div><i :class="icon"></i></div>
        <div>{{ abbreviatedNumber }}</div>
      </div>
      <div class="mute-text">{{ label }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    value: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    icon: {
      type: String,
      required: false,
      default: ""
    }
  });
  
  const abbreviatedNumber = computed(() => {
    const number = Number(props.value);
    if (isNaN(props.value)) return "-";
    if (props.value < 1000) return props.value;
    if (props.value < 1000000) return (props.value / 1000).toFixed(1) + "k";
    return (props.value / 1000000).toFixed(1) + "m";
  });
  </script>
  
  <style scoped></style>
  