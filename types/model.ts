export interface AppConfigData {
    company_name: string;
    slogan: string;
    description: string;
    metaUrl: string;
    company_url: string;
}


export interface nftTypes {
    id: string | number,
    name: string,
    image: string
    tag: string
    price: number
}

export type Testimonials = {
    name: string;
    position: string;
    image: string;
    description: string;
    star: number;
  };