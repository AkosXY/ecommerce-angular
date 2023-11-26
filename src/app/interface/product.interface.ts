export interface Product {
  category: string[];
  description: string[];
  title: string;
  also_buy: string[];
  brand: string;
  feature: string[];
  also_view: string[];
  main_cat: string;
  date: string;
  price: string;
  asin: string;
  imageURL: string[];
  image_URL_High_Res: string[];
}



export interface SimpleProduct {
  title: string;
  asin: string;
}
