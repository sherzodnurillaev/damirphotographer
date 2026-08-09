export interface Service {
  id: number;

  title: {
    ru: string;
    en: string;
    uz: string;
  };

  short_description: {
    ru: string;
    en: string;
    uz: string;
  };

  description: {
    ru: string;
    en: string;
    uz: string;
  };

  duration: {
    ru: string;
    en: string;
    uz: string;
  };

  category: string;

  image: string;

  price: number;
  priceLow: number;
  priceTop: number;

}