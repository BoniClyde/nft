import { defineStore } from "pinia";
import { ref } from "vue";
import { AppConfigData } from "~/types/model";

export const useAppStore = defineStore("appConfig", () => {
  
 const appConfigData = ref <AppConfigData>({
    company_name: "Collectives Market",
    slogan: "Best Trading Platform",
    description:`Explore a diverse collection of NFTs created by talented artists, 
    Buy, sell, and trade exclusive digital assets securely using blockchain technology and cryptocurrency.`,
    metaUrl: "https://i.seadn.io/gae/YkhH9qoZ5CoeU7QOaCFbOLJASTFYo_E5XCBfKp-OccbHtP_G2wFEYZ2c6tScDPCe1tW-klbvzorZMX6zJyDvCAW6e0ezgAIZnYnagHw?auto=format&dpr=1&w=1000"

 })
    return { appConfigData };
  });