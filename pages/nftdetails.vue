<template>
  <div class="container mx-auto p-4">
    <div>
      <h1 class="theme-text heading mb-4">Collection Name</h1>

      <h2 class="theme-text text-3xl">NFT 8 - Death of a Salesman</h2>
    </div>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="space-y-2 py-4">
        <div
          class="image-container relative overflow-hidden rounded-2xl border shadow dark:border-secondary-900"
        >
          <nuxt-img
            class="aspect-[3/4] w-full rounded-t-2xl object-cover"
            sizes="sm:100vw md:50vw lg:400px"
            src="nft/nft8.png"
            placeholder="nft/deafaultErrorImage.png"
          />
          <div
            class="theme-text absolute bottom-0 z-40 w-full bg-white p-4 dark:bg-secondary-900"
          >
            <div class="flex justify-between">
              <div>
                <i class="fa-light fa-link cursor-pointer"></i>
              </div>
              <div>
                <i
                  class="fa-sharp fa-regular fa-heart cursor-pointer hover:text-secondary-700"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="mb-6">Death of a Salesman</div>
        <div class="mb-6 flex flex-row gap-x-4">
          <button class="btn2">1.49ETH</button>
          <button class="btn1">$3,500</button>
        </div>
        <div class="mb-6">
          A masterpiece built with vibrant colors that represents the freedom of
          womanhood. This art also represents intersectional self as well. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </div>
        <div class="mb-6 flex gap-x-4">
          <img class="h-14 w-14 rounded-full" src="nft/nft3.png" alt="" />
          <div class="">
            <h1>Adem Smith</h1>
            <p>By Owner</p>
          </div>
        </div>
        <div class="mb-6">
          <div>
            <div class="mb-4"><h1>Latest Bids</h1></div>
            <div class="flow-root">
              <ul>
                <li v-for="(event, eventIdx) in timeline" :key="event.id">
                  <div class="relative pb-8">
                    <!-- <span
                      v-if="eventIdx !== timelines.length - 1"
                      class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    /> -->
                    <div class="relative flex space-x-6">
                      <div>
                        <span
                          :class="[
                            event.iconBackground,
                            'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
                          ]"
                        >
                          <component
                            :is="event.icon"
                            class="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div
                        class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5"
                      >
                        <div>
                          <p class="text-sm text-gray-500">
                            {{ event.content }}
                            <a
                              :href="event.href"
                              class="font-medium text-gray-900"
                              >{{ event.target }}</a
                            >
                          </p>
                        </div>
                        <div
                          class="whitespace-nowrap text-right text-sm text-gray-500"
                        >
                          <time :datetime="event.datetime">{{
                            event.date
                          }}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mb-6 flex flex-row gap-x-4">
          <button class="btn">Place a bid</button>
          <button class="btn2">Purchase Now</button>
        </div>
      </div>
      <div v-if="false">
        <h1 class="theme-text heading mb-4">Collection Name</h1>

        <h2 class="theme-text text-3xl">NFT 8 - Death of a Salesman</h2>

        <div class="mb-4 flex justify-between py-4">
          <div class="flex gap-x-4">
            <div>
              <img class="h-14 w-14 rounded-full" src="nft/nft3.png" alt="" />
            </div>
            <div>
              <h1>Created By</h1>
              <p>Mitsibushi</p>
            </div>
          </div>
          <div class="flex gap-x-4">
            <div>
              <img class="h-14 w-14 rounded-full" src="nft/nft3.png" alt="" />
            </div>
            <div>
              <h1>Current Owner</h1>
              <p>Mitsibushi</p>
            </div>
          </div>
        </div>
        <div class="mb-2 border-b-2 border-gray-100"></div>
        <div class="flex justify-between">
          <div class="flex gap-x-2">
            <p>1</p>
            <i class="fa-sharp fa-regular fa-heart"></i>
          </div>
          <div class="flex gap-x-2">
            <p>Share</p>
            <i class="fa-sharp fa-regular fa-share-from-square"></i>
          </div>

          <div class="flex gap-x-2">
            <p>Refresh</p>
            <i class="fa-duotone fa-arrows-rotate"></i>
          </div>
        </div>
        <div>
          <div class="bg-blue-500 p-10">
            <h1>Price things</h1>
            <h2>Price</h2>
            <h3>In Dollar</h3>
          </div>
          <div class="bg-red-400 p-10">
            <h1>Last Sale Price</h1>
            <div>
              <button>Buy now</button>
            </div>
            <div class="">
              <button>Place bid</button>
            </div>
          </div>
          <div class="bg-green-400 p-10">
            <p>Countdown</p>
          </div>
        </div>

        <!-- <div class="0 mx-auto px-4">
          <div class="flex flex-col gap-4 p-4">
            <div>
              <h3 class="text-lg font-semibold">Offers</h3>
              <p>{{ offers }}</p>
            </div>

            <div>
              <h3 class="text-lg font-semibold">Details</h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p>
                    <span class="font-semibold">Contract Address:</span>
                    {{ contractAddress }}
                  </p>
                  <p>
                    <span class="font-semibold">Token ID:</span> {{ tokenId }}
                  </p>
                </div>
                <div>
                  <p><span class="font-semibold">Chain:</span> {{ chain }}</p>
                  <p>
                    <span class="font-semibold">Metadata:</span> {{ metadata }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="py-10">
      <CollectionSlider />
    </div>
  </div>
</template>

<script setup>
import CollectionSlider from "~/pages/section/CollectionSlider.vue";

const timeline = [
  {
    id: 1,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: "fa-duotone fa-user",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: "fa-duotone fa-thumbs-up",
  },
  {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: "fa-solid fa-check",
  },
  {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: "fa-duotone fa-thumbs-up",
  },
  {
    id: 5,
    content: "Completed interview with",
    target: "Katherine Snyder",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: "fa-solid fa-check",
  },
];
</script>

<style scoped>
.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}
</style>
