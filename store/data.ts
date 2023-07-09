import { defineStore } from "pinia";
import { useAppStore } from "./appStore";

export const useWebsiteStore = defineStore("websiteStore", () => {
  const appStore = useAppStore();
  const websiteData = ref<any>({
    howItWorks: {
      sectionOne: {
        title: "Award winning support",
        subtitle: `We’re here to help`,
        description: `We take pride in providing top-notch support to our users.
             Our experienced team is here to assist you every step of the way, ensuring a 
             smooth and enjoyable experience on our platform. Whether you have questions
             about creating listings, managing your collections,
              or navigating the marketplace, we're here to help. Our 
              knowledgeable support agents are available 24/7 to address
               your inquiries and provide personalized guidance. With our commitment to customer satisfaction, we strive to exceed your expectations.`,
      },

      sectionTwo: [
        {
          step: 1,
          title: "Create an Account",
          description:
            "Sign up and create your digital wallet to securely store and manage your NFTs.",
        },
        {
          step: 2,
          title: "Browse NFTs",
          description:
            "Explore a vast collection of unique NFTs created by artists and creators worldwide.",
        },
        {
          step: 3,
          title: "Buy and Sell",
          description:
            "Purchase or sell NFTs securely using cryptocurrency. Join the digital art revolution!",
        },
      ],

      customers_love: {
        title: "     Our customers love us",
        description: ` At ${appStore.appConfigData.company_name}, we pride ourselves
          on delivering exceptional customer experiences. With personalized
          service, a vibrant community, curated collections, secure
          transactions, and a commitment to mutual growth, we are dedicated
          to exceeding your expectations.`,
      },
      benefits: {
        title: "Benefits of Using Our Platform",
        benefits: [
          {
            title: "Secure and Transparent Transactions",
            description:
              "Our platform leverages blockchain technology to ensure secure and transparent transactions for buying and selling NFTs.",
          },
          {
            title: "Wide Range of NFT Categories",
            description:
              "Discover a diverse range of NFT categories including art, music, collectibles, virtual real estate, and more.",
          },
          {
            title: "Community and Social Features",
            description:
              "Engage with a vibrant community of artists, collectors, and enthusiasts through forums, chat, and social features.",
          },
        ],
      },

      // START YOUR JOURNEY
    },
  });
  return { websiteData };
});
