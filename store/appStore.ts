import { defineStore } from "pinia";
import { ref } from "vue";
import { AppConfigData } from "~/types/model";
import { clientUrl } from "../config";


export const useAppStore = defineStore("appConfig", () => {
  const appConfigData = ref<AppConfigData>({
    short_name: "Nifty",
    company_name: "Nifty Collective ",
    company_number: "01283924",
    company_sales_email:"sales@theniftycollective.com",
    company_support_email:"support@theniftycollective.com",
    slogan: "Discover, Collect, and Trade Unique Digital Assets",
    description: `Explore a diverse collection of NFTs created by talented artists, 
    Buy, sell, and trade exclusive digital assets securely using blockchain technology and cryptocurrency.`,
    metaUrl:
      "https://i.seadn.io/gae/YkhH9qoZ5CoeU7QOaCFbOLJASTFYo_E5XCBfKp-OccbHtP_G2wFEYZ2c6tScDPCe1tW-klbvzorZMX6zJyDvCAW6e0ezgAIZnYnagHw?auto=format&dpr=1&w=1000",
    company_url: "nftcollective.com",
    instagram_url:"https://instagram.com/nifty_collective_?igshid=OGQ5ZDc2ODk2ZA==",
    twitter_url:"https://twitter.com/niftycollectiv",
    facebook_url:"#",
    telegram_url:"https://t.me/+De5zRocxOIc4MWRk",
    register_url:`${clientUrl}/register`,
    login_url:`${clientUrl}`,
    privacy_link:"https://blog.theniftycollective.com/faqs-how-tos/",
    terms_link:"https://blog.theniftycollective.com/terms-of-use/",
    blog_link:"https://blog.theniftycollective.com",
    legal_link:"https://blog.theniftycollective.com/legal/",
  });
  // https://theniftycollective.com/explore
  return { appConfigData };
});

export const searchStore = defineStore("search", () => {
  const searchQuery = ref<string>("");
  const page = ref<number>(1);
  const perPage = ref<number>(10);

  return { searchQuery, page, perPage };
});

export const useModalStore = defineStore("menu", () => {
  const isModalOpen = ref<boolean>(false);

  function openModal() {
    const bodyElement = document.body as HTMLElement;
    bodyElement.style.overflow = "hidden";
    isModalOpen.value = true;
  }

  function hideModal() {
    const bodyElement = document.body as HTMLElement;
    bodyElement.style.overflow = "auto";
    isModalOpen.value = false;
  }

  return { isModalOpen, openModal, hideModal };
});
