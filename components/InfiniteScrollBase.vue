<template>
  <div class="rounded-lg border-2 border-red-500 p-10">
    Inifitnte scroll ---
    <div>
      {{ fetchedData.length }}
      <div>
        <div v-for="(item, index) in fetchedData" :key="index">
          <img class="h-10" :src="item.media.gateway" />
        </div>
      </div>
    </div>

    <div>{{ fetchedData.length }}</div>
    <div ref="scrollTrigger"></div>
  </div>
</template>

<script setup lang="ts">
import { searchStore } from "~/store/appStore";
import { NftDataTypes } from "~/types/model";
import axios from "axios";

const selectedType = ref<"nft" | "collection">("nft");

const fetchedData = ref<NftDataTypes[]>([]);

const search_store = searchStore();

const scrollTrigger = ref<any>(null); // used to selet the html element

const isLoading = ref(false);

function selectCollection() {
  selectedType.value = "collection";
}

function selectNfts() {
  selectedType.value = "nft";
}

// fetch data
function fetchNftData() {
  if (isLoading.value) return;
  isLoading.value = true;
  axios
    .get(`http://localhost:5066/api/nfts/all-nfts`, {
      params: {
        perPage: 4,
        search: search_store.searchQuery,
        page: search_store.page,
        //  search: "chum",
        type: "nft",
      },
    })
    .then((response) => {
      console.log(response.data);
      fetchedData.value = [...fetchedData.value, ...response.data.data];
      search_store.page++;
      isLoading.value = false;
    })
    .catch((error) => {
      console.error(error);
      isLoading.value = false;
    });
}

// listen for when a user scrolls to the bottom of the page
// the bottom of the page is the scroll trigger

function scrollListener() {
  const options = {
    rootMargin: "0px",
    threshold: 1,
  };

//   this funtion watch for the scroll trigger
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("triggered");
      fetchNftData();
    }
  }, options);
  observer.observe(scrollTrigger?.value);
}

onMounted(() => {
  console.log("mounted");
  fetchNftData();
  scrollListener();
});
</script>

<style scoped></style>
