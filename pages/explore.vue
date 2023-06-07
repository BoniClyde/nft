<template>
  <div>
    <div v-if="pending"></div>

    <div v-else>
      {{ data.meta }}

     <div class="grid grid-cols-3">
        <div v-for="(item, index) in data?.data" :key="index">
        <div class="my-10">
          {{ item.collectionName }}
          <img class="h-40" :src="item.media.gateway" />
        </div>
     </div>
      </div>
    </div>
    <div>Explore page</div>
  </div>
</template>

<script setup lang="ts">
import { useClientFetch } from "~/request.http";
import { NftDataTypes } from "~/types/model";

const { data, pending } = await useClientFetch<{
  data?: {
    data: NftDataTypes[];
    meta: any;
  };
}>("/nfts/all-nfts", {
  query: {
    perPage: 20,
  },
});
</script>

<style scoped></style>
