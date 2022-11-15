export type albumImageType = {
  black: string[];
  green: string[];
  blue: string[];
};
export interface ProductTShort {
  pk: number;
  title: string;
  albumImages: albumImageType;
  price: number;
  discount: number;
  totalPrice: number;
  size: string;
  description: string;
  features: string[];
}
