export interface AppConfigData {
    company_name: string;
    slogan: string;
    description: string;
    metaUrl: string;
    company_url: string;
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
    savedToCollection: boolean;
    owner: string;
    media: {
      thumbnail: string;
      format: string;
      gateway: string;
      bytes: number;
    };
    price: number;
    lastSale: number;
    externalLink: null | string;
    isUploaded: boolean;
    views: number;
    favorites: number;
    saleEndDate: string;
    saleStartDate: string;
    currency: string;
    minimumOffer: number;
    seeded: boolean;
    status: string;
    rawMetadata: {
      attributes: Array<{
        value: string;
        trait_type: string;
      }>;
    };
  }
  