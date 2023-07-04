<template>
  <!--   <div>{{ isLoading }}</div>
  <div>{{ nftActivities }} </div> -->
  <div>
    <div class="flow-root">
      <ul>
        <li v-for="(bid, index) in bids" :key="index">
          <div class="relative pb-8">
            <div class="relative flex space-x-6">
              <div>
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500"
                >
                  <i
                    class="cursor-pointer px-1"
                    :class="`${bid.iconstyle} ${bid.icon}`"
                  ></i>
                </span>
              </div>
              <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div>
                  <p class="theme-text text-sm">
                    {{ bid.user }} {{ bid.activity }}
                  </p>
                </div>
                <div class="whitespace-nowrap text-right text-sm text-gray-500">
                  <time :datetime="bid.datetime">{{ bid.date }}</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
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

const bids: BidsType[] = [
  {
    user: "John Doe",
    amount: 1.5,
    activity: "Increased Bid offer to 11 ETH",
    date: "June 10, 2023",
    datetime: "2023-06-10",
    icon: "fa-solid fa-check",
    iconstyle: "text-green-500",
  },
  {
    user: "Jane Smith",
    amount: 1.8,
    activity: "rejected last Bid offer",
    date: "June 9, 2023",
    datetime: "2023-06-09",
    icon: "fa-solid fa-cancel",

    iconstyle: "text-red-500",
  },
  {
    user: "Mike Johnson",
    amount: 1.2,
    activity: "Increased Bid offer to 20 ETH",
    date: "June 8, 2023",
    datetime: "2023-06-08",
    icon: "fa-solid fa-check",

    iconstyle: "text-green-500",
  },
  // Add more bids here...
];
</script>

<style scoped></style>
