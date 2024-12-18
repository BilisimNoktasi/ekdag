import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { TypedObject } from "sanity";

export type Menu = {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    submenu?: Menu[];
  };

  export type Feature = {
    tesisAdi: string;
    slug: string;
    tesisCardImage: {url:string};
    tesisDetail: Block[];
    ico: {url:string};
    link: string;
  };

  export type SliderData= {
    smImg: string;
    mdImg: string;
  }

  export type Image = {
    _key: string;
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };

  export type TesisDetailData = {
    tesisAdi: string;
    tesisHarita: string;
    tesisKartResmi: {url:string}
    tesisDetaylar: Block[];
    tesisDetayResmi: {url: string};
    tesisResimler: {url:string}[]
  }

  export type MansetDetail = {
    sliderMobil: {url:string};
    sliderGenis: {url:string};
    detailContent: Block[];
    mansetAdi: string;
  }

  export type GalleryType = {
    galeriBaslik: string;
    slug: string;
    galeriKartGorseli: {url:string};
  }

  export type Social = {
    baslik: string;
    url: string;
  }

  export type HomeData = {
    category: string;
    slug: string;
    sliderGenis: {url:string};
    sliderMobil: {url:string};
  };

  export type GalleryItem = {
    galeriBaslik: string;
    galeriResimler: {url:string}[];
  }
  
  export type FeatureTab = {
    baslik: string;
    aciklama: string;
    resim1: {url:string};
    resim2: {url:string};
    link: string;
  };

  export type FacilityDetail = {
    tesisAdi: string;
    slug: string;
    tesisDetail: string;
    tesisCardImage: {url:string}
    tesisDetailImage: {url:string};
    tesisImages: {url:string}[]
  }

  export type NewsDetail = {
    haberBaslik: string;
    altBaslik: string;
    haberDetayi: Block[];
    haberResmi: {url:string}
  }

  export type NewsCard = {
    haberBaslik: string;
    altBaslik: string;
    slug: string;
    haberResmi: {url:string}
  }

  export type SosyalTesisler = {
    tesisAdi: string;
    slug: string;
    tesisKartResmi: {url:string};
    tesisHarita: string;
    tesisDetaylar: Block[];
    tesisDetayResmi: {url:string};
    tesisResimler: {url:string}[]
  }
  
  export type Author = {
    name: string;
    image: string;
    bio?: string;
    _id?: number | string;
    _ref?: number | string;
  };

  export type Slug = {
    _type: string,
    current: string
  }
  
  export type Blog = {
    blogBaslik: string;
    altBaslik: string;
    slug: string;
    blogResmi: {url:string};
    blogDetay: Block[];
  };
  
  export type RequestOptions = {
    controller: string;
    params?: Record<string, string>;
  };

  interface EditorBlock {
    type: string;  // "paragraph", "heading", "list" gibi tipler
    content: {
      text: string;
    }[];
  }

  interface Block {
    type: string;
    children: {
      text: string;
      type: string;
    }[];
  }
  