export type albumImageType = {
  black: string[];
  green: string[];
  blue: string[];
};
export interface ProductTShort {
  pk: number;
  title: string;
  album_images: albumImageType;
  price: number;
  discount: number;
  total_price: number;
  size: string;
  description: string;
  features: string[];
}
