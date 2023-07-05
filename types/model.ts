export interface AppConfigData {
  instagram_url:string;
    facebook_url:string;
    twitter_url:string;
    telegram_url:string;
    company_name: string;
    company_number: number;
    company_support_email:string;
    company_sales_email:string;
    slogan: string;
    description: string;
    metaUrl: string;
    company_url: string;
    short_name: string;
    register_url:string;
    login_url:string;
    privacy_link:string;
    terms_link:string;
    blog_link:string;
    legal_link:string;
}


export type collectionTypes = {
    collectionName: string;
    _id: string;
  collectionImage: string;
  floorPrice: number;
  nftCount: number;
}

export type Testimonials = {
    name: string;
    position: string;
    image: string;
    description: string;
    star: number;
  };

  export type NftDataTypes = {
    _id: string;
    uuid: string;
    updatedAt: string;
    createdAt: string;
    contract: {
      address: string;
      name: string;
      symbol: string;
      tokenId: string;
    };
    collectionName: string;
    collectionImage: string;
    description: string;
    media: {
      thumbnail: string;
      format: string;
      gateway: string;
      bytes: number;
    };
    price: number;
    views: number;
    favorites: number;
    currency: string;
    minimumOffer: number;
    status: string;
    rawMetadata: {
      attributes: Array<{
        value: string;
        trait_type: string;
      }>;
    };
  }
  
  export  type BidsType = {
    user: string;
    amount: number;
    activity: string;
    date: string;
    datetime: string;
    icon: string;
    iconstyle?: string;
  };

  export type ThemeValueType = {
  title: string;
  icon: string;
  value: "light" | "dark" | "system";
  iconstyle?: string;
};
