<template>
  <!--   
  <div>{{ nftActivities }} </div> -->
  <div v-if="isLoading">{{ isLoading }}</div>

  <div v-else class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div
          class="inline-block h-40 min-w-full py-2 align-middle sm:px-6 lg:px-8"
        >
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="text-white-900 py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0"
                >
                  From
                </th>
                <th
                  scope="col"
                  class="theme-text px-3 py-3.5 text-left text-sm font-semibold"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  class="theme-text px-3 py-3.5 text-left text-sm font-semibold"
                >
                  Channel
                </th>
                <th
                  scope="col"
                  class="theme-text px-3 py-3.5 text-left text-sm font-semibold"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(bid, index) in nftActivities?.data" :key="index">
                <td
                  class="theme-text whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0"
                >
                  {{ bid.ethAddress }}
                </td>
                <td class="theme-text whitespace-nowrap px-3 py-4 text-sm">
                  {{ bid.amount }}
                </td>
                <td class="theme-text whitespace-nowrap px-3 py-4 text-sm">
                  {{ bid.channel }}
                </td>
                <td class="theme-text whitespace-nowrap px-3 py-4 text-sm">
                  {{ bid.createdAt }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BidsType } from "types/model";
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

const bids = [
  {
    amount: 1.5,
    occuredAt: "June 10, 2023",
    channel: "Offer",
    ethAddress: "fnbwijkdjniwdjnfknciwjxcsnddf0",
  },
  // More people...
];

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
};

// Add more bids here...
</script>

<style scoped></style>
