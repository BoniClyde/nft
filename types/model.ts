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