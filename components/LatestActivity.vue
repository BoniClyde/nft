<template>
  <div>
    <ul>
      {{
        items.length
      }}
      <li v-for="item in items" :key="item.id">
        {{ item }}

        <img :src="item.media.gateway" />
      </li>
    </ul>
    <div ref="scrollTrigger"></div>
  </div>
</template>

<script>
import axios from "axios";
import Image from "./utils/Image.vue";
export default {
  components: {
    Image,
  },
  data() {
    return {
      items: [],
      page: 1,
      perPage: 3,
      loading: false,
    };
  },
  mounted() {
    this.fetchData();
    this.setupScrollListener();
  },
  methods: {
    fetchData() {
      if (this.loading) return;
      this.loading = true;
      axios
        .get(
          `http://localhost:5066/api/nfts/all-nfts?perPage=${this.perPage}&page=${this.page}`
        )
        .then((response) => {
          console.log(response.data.data);
          this.items = [...this.items, ...response.data.data];
          this.page++;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    },
    setupScrollListener() {
      const scrollTrigger = this.$refs.scrollTrigger;
      const options = {
        rootMargin: "0px",
        threshold: 1,
      };
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("triggered");
          this.fetchData();
        }
      }, options);
      observer.observe(scrollTrigger);
    },
  },
  components: { Image },
};
</script>
