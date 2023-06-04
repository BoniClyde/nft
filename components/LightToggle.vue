<template>
  <div class="">
    <button @click="toggleColorMode" class="outline-none focus:outline-none">
      <i
        class="text-2xl"
        :class="{ 'text-white': $colorMode.preference === 'dark' }"
      >
        <font-awesome-icon :icon="getIconName" />
      </i>
    </button>
  </div>
</template>

<script>
// Add the required icons to the library
library.add(faSun, faMoon);

export default {
  components: {
    FontAwesomeIcon,
  },
  computed: {
    getIconName() {
      return this.$colorMode.preference === "dark" ? "sun" : "moon";
    },
  },
  methods: {
    toggleColorMode() {
      if (this.$colorMode.preference === "dark") {
        this.$colorMode.preference = "light";
      } else {
        this.$colorMode.preference = "dark";
      }
    },
  },
};
</script>

<style scoped>
.text-white {
  color: #ffffff;
}
</style>
