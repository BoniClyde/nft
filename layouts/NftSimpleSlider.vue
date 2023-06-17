

 <template>
  <div>
    <h1>Native slider</h1>
    <Splide
      :has-track="false"
      :options="options"
      aria-label="My Favorite Images"
      class=""
    >
      <SplideTrack>
        <SplideSlide v-for="(nft, index) in data?.data" :key="index">
          <NftSimpleCard
          :name="nft.contract.name"
          :key="index"
          class="px-1"
          :src="nft.media.gateway"
          :price="nft.price"
          :tokenId="nft.contract.tokenId"
        />
        </SplideSlide>
      </SplideTrack>
      <button class="splide__toggle" type="button">
        <span class="splide__toggle__play">Play</span>
        <span class="splide__toggle__pause">Pause</span>
      </button>
      <div class="splide__progress">
		<div class="splide__progress__bar">
		</div>
  </div>
    </Splide>
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import NftSimpleCard from "~/components/NftSimpleCard.vue";
import { ref, onMounted } from "vue";
import { NftDataTypes } from "~/types/model";
import { useClientFetch } from "~/request.http";

const { data, pending } = await useClientFetch<{
  data: NftDataTypes[];
  meta: {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
  };
}>("/nfts/all-nfts", {
  query: {
    perPage: 20,
  },
});


import "@splidejs/vue-splide/css";

// or other themes
import '@splidejs/splide/css/skyblue';

import "@splidejs/vue-splide/css/core";


const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  perPage: 4,
  pagination: false,
  arrows: false,
  breakpoints: {
    1200: { perPage: 2, gap: '1rem' },
    640 : { gap: 0 },
  },
  autoplay: true,
};


</script>

<style lang="scss" scoped>

.splide__progress__bar {
  height: 3px;
  @apply bg-primary-500
}

</style>
