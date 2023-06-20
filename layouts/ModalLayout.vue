<template>
  <div>
    <div ref="modalArea" v-if="modalStore.isModalOpen" class="modal modal-open">
      <div ref="target">
        <slot name="mobilMenu"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/appStore";
import { onClickOutside } from "@vueuse/core";

const modalStore = useModalStore();

const target = ref(null);

const modalArea = ref<HTMLElement | null>(null);

onMounted(() => {
  const bodyElement = document.body;
});

onClickOutside(target, (event) => {
  modalStore.hideModal();
});
</script>

<style scoped>
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  z-index: 50;
  background: rgba(255, 255, 255, 0.87);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.7px);
  -webkit-backdrop-filter: blur(8.7px);
  @apply bg-white dark:bg-secondary-700;
}


</style>
