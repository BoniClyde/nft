<template>
  <div>
    <Splide
      :has-track="false"
      :options="options"
      aria-label="My Favorite Images"
      class=""
    >
      <SplideTrack>
        <SplideSlide v-for="(item, index) in testimonials" :key="index">
          <TestimonialCard
            :name="item.name"
            :description="item.description"
            :position="item.position"
            :star="item.star"
            :image="item.image"
          />
        </SplideSlide>
      </SplideTrack>
      <button class="splide__toggle" type="button">
        <span class="splide__toggle__play"
          ><i class="fa-sharp fa-solid fa-play"></i
        ></span>
        <span class="splide__toggle__pause"
          ><i class="fa-sharp fa-solid fa-pause"></i
        ></span>
      </button>
      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
    </Splide>
  </div>
</template>

<script lang="ts" setup>
import { Testimonials } from "~/types/model";
import TestimonialCard from "~/layouts/TestimonialCard.vue";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import { useAppStore } from "~/store/appStore";

import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";
const appStore = useAppStore();

const testimonials = ref<Testimonials[]>([
  {
    name: "@ArtisticSoul",
    position: "Digital Artist",
    image: "nft/nft5.png",
    description: `${appStore.appConfigData.company_name} has provided me with an incredible platform to showcase and sell my digital artwork. The seamless user experience and extensive community support have made it the go-to marketplace for artists like me.`,
    star: 5,
  },
  {
    name: "@CollectorKing",
    position: "NFT Collector",
    image: "nft/user.png",
    description: `As an avid collector, I've explored numerous NFT platforms, but ${appStore.appConfigData.company_name} stands out from the rest. The diverse range of high-quality NFTs available, coupled with the secure and transparent transactions, make it my top choice.`,
    star: 4,
  },
  {
    name: "@CryptoEnthusiast",
    position: "Blockchain Enthusiast",
    image: "/nft/nft3.png",
    description: `${appStore.appConfigData.company_name} has revolutionized the way we engage with digital assets. Their innovative use of blockchain technology ensures the authenticity and uniqueness of every NFT. It's a game-changer for the art and collectibles industry.`,
    star: 5,
  },
  {
    name: "@InvestorPro",
    position: "Crypto Investor",
    image: "/nft/nft4.png",
    description: `Investing in NFTs has become a lucrative venture, and ${appStore.appConfigData.company_name} has been my trusted platform for discovering valuable digital assets. Their expertly curated selection and reliable valuation tools have helped me make informed investment decisions.`,
    star: 4,
  },
  {
    name: "@ArtExplorer",
    position: "Art Enthusiast",
    image: "/nft/nft5.png",
    description: `Being a part of the ${appStore.appConfigData.company_name} community has been an enriching experience. The platform fosters a vibrant art-loving community, where I can connect with fellow enthusiasts and discover remarkable NFT artworks. It's an incredible journey of artistic exploration.`,
    star: 5,
  },
  {
    name: "@TraderPro",
    position: "NFT Trader",
    image: "/nft/nft6.png",
    description: `I've been actively trading NFTs on ${appStore.appConfigData.company_name} and I'm impressed by the user-friendly interface and the robust trading features. The marketplace provides ample opportunities for buyers and sellers to connect and transact securely.`,
    star: 4,
  },
  {
    name: "@DigitalCreator",
    position: "Digital Creator",
    image: "/nft/nft7.png",
    description: `As a digital creator, ${appStore.appConfigData.company_name} has given me a global platform to monetize my creativity. The marketplace's support for various digital formats and the ability to engage directly with collectors have been instrumental in my success.`,
    star: 5,
  },
  {
    name: "@ArtInvestor",
    position: "Art Investor",
    image: "/nft/nft8.png",
    description: `I've diversified my art investment portfolio with NFTs from ${appStore.appConfigData.company_name}. The platform's focus on quality curation, artist collaborations, and secure provenance tracking has made it a trusted destination for art investors like me.`,
    star: 5,
  },
  {
    name: "@NFTEnthusiast",
    position: "NFT Enthusiast",
    image: "nft/user.png",
    description: `Being an NFT enthusiast, ${appStore.appConfigData.company_name} has provided me with an exciting space to explore and collect unique digital assets. The platform's community engagement and cutting-edge technology have made it a standout in the NFT ecosystem.`,
    star: 4,
  },
  {
    name: "@ArtAppreciator",
    position: "Art Appreciator",
    image: "/nft/nft10.png",
    description: `Discovering and appreciating art has never been more thrilling than on ${appStore.appConfigData.company_name}. The platform's diverse range of artworks, from traditional to digital, has allowed me to expand my artistic horizons and support talented artists.`,
    star: 5,
  },
  {
    name: "@CryptoArtLover",
    position: "Crypto Art Enthusiast",
    image: "nft/user.png",
    description: `I'm amazed by the vibrant and innovative crypto art community on ${appStore.appConfigData.company_name}. The platform's support for emerging artists and the ability to participate in auctions and limited editions make it a must-visit for any crypto art lover.`,
    star: 4,
  },
  {
    name: "@DigitalCollector",
    position: "Digital Collectibles Enthusiast",
    image: "nft/user.png",
    description: `Collecting digital memorabilia has become my passion, and ${appStore.appConfigData.company_name} has become my go-to marketplace. The platform's extensive collection of digital collectibles, including trading cards, virtual items, and digital fashion, keeps me engaged and excited.`,
    star: 5,
  },
  {
    name: "@NFTGuru",
    position: "NFT Consultant",
    image: "nft/nft6.png",
    description: `When it comes to NFTs, ${appStore.appConfigData.company_name} is my trusted source of information and guidance. The platform's educational resources, expert insights, and dedicated community forums have helped me navigate the ever-evolving world of non-fungible tokens.`,
    star: 5,
  },
  {
    name: "@CryptoArtist",
    position: "Crypto Artist",
    image: "nft/user.png",
    description: `Creating and selling my art on ${appStore.appConfigData.company_name} has been a game-changer for my artistic career. The platform's exposure, supportive community, and seamless art minting process have empowered me to reach a global audience and monetize my creativity.`,
    star: 4,
  },
  {
    name: "@NFTInvestor",
    position: "NFT Investor",
    image: "nft/nft9.png",
    description: `As an NFT investor, I rely on ${appStore.appConfigData.company_name} to discover promising projects and make informed investment decisions. The platform's thorough vetting process, market analysis tools, and transparent transaction history give me the confidence to invest in NFTs.`,
    star: 5,
  },
  {
    name: "@VirtualRealityFan",
    position: "Virtual Reality Enthusiast",
    image: "nft/user.png",
    description: `The integration of virtual reality experiences with ${appStore.appConfigData.company_name} has taken NFTs to a whole new level. Exploring virtual galleries and immersive digital worlds through the platform has expanded my perception of art and its possibilities.`,
    star: 4,
  },
  {
    name: "@NFTFashionista",
    position: "NFT Fashion Enthusiast",
    image: "nft/user.png",
    description: `Fashion meets technology on ${appStore.appConfigData.company_name}. The platform's collection of digital fashion and avatar accessories allows me to express my style in the metaverse. It's a fashion-forward destination for those seeking unique and trendsetting NFT wearables.`,
    star: 5,
  },
  {
    name: "@BlockchainDeveloper",
    position: "Blockchain Developer",
    image: "nft/user.png",
    description: `As a blockchain developer, I appreciate ${appStore.appConfigData.company_name}'s commitment to open-source development and community collaboration. The platform's support for smart contracts and interoperability makes it an ideal environment for creating and deploying NFT projects.`,
    star: 4,
  },
  {
    name: "@ArtCollective",
    position: "Art Collective",
    image: "nft/user.png",
    description: `Our art collective has found a home on ${appStore.appConfigData.company_name}. The platform's collaborative features, shared ownership options, and support for group exhibitions have fostered a sense of community and allowed us to showcase our collective artistic vision.`,
    star: 5,
  },
  {
    name: "@NFTEnthusiast",
    position: "NFT Enthusiast",
    image: "nft/user.png",
    description: `I'm captivated by the vast possibilities of NFTs, and ${appStore.appConfigData.company_name} is my gateway to exploring this digital frontier. From virtual real estate to decentralized gaming assets, the platform's diverse NFT ecosystem fuels my curiosity and passion.`,
    star: 4,
  },
  // Add more testimonials here
]);
const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  pagination: true,
  arrows: true,
  perPage: 2,
  breakpoints: {
    1200: { perPage: 2, gap: "1rem", arrows: true },
    640: { perPage: 1, gap: 0, arrows: false },
  },

  autoplay: true,
};
</script>

<style lang="scss" scoped>
.splide__progress__bar {
  height: 3px;
  @apply bg-primary-200;
}
</style>
