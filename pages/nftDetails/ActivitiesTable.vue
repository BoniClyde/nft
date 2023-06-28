<template>
  <div>{{ nftActivities }}</div>
</template>

<script setup lang="ts">
import { $axios } from "../../request.http";

const isLoading = ref(false);

const nftActivities = ref<{
  meta: {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
  };
  activities: activityType[];
}>();

const route = useRoute();

const nftUuid = computed(() => {
  return route.params.nftUuid;
});

function getActivities() {
  isLoading.value = true;

  $axios
    .get<{
      meta: {
        total: number;
        perPage: number;
        page: number;
        lastPage: number;
      };
      activities: any[];
    }>(`/nfts/item/activities/${nftUuid.value}`)
    .then((response) => {
      nftActivities.value = response.data;
      isLoading.value = false;
    })
    .catch((error) => {
      console.log(error);
      isLoading.value = false;
    });

}

onMounted(() => {
  getActivities();
}); //


type activityType = {
  accountId: number;
  amount: number;
  channel: string;
  createdAt: string;
  currency: string;
  ethAddress: string;
  nftUuid: string;
  occurredAt: string;
  type: string;
  updatedAt: string;
  uuid: string;
  _id: string;
}
</script>

<style scoped></style>
