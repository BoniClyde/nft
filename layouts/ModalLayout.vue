<template>
  <div>
    <Transition name="slide-fade">
      <div v-if="modalStore.isModalOpen" class="modal">
        <div ref="target">
          <slot name="mobilMenu"></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/appStore";
import { onClickOutside } from "@vueuse/core";

const target = ref(null);

const modalStore = useModalStore();

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
  /* background: rgba(255, 255, 255, 0.87); */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.7px);
  -webkit-backdrop-filter: blur(8.7px);
  /* @apply bg-white dark:bg-secondary-700; */
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
