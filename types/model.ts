export interface AppConfigData {
    company_name: string;
    slogan: string;
    description: string;
    metaUrl: string;
    company_url: string;
    short_name: string;
}


export type nftTypes = {
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
  