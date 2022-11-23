import { ProductClothesEnum } from "@/redux/productProperties/type";

export type albumImageTShirtType = {
  black: string[];
  green: string[];
  blue: string[];
};
export type albumImageHoodieType = {
  black: string[];
  white: string[];
  blue: string[];
};
export interface ProductClothesBase {
  pk: number;
  title: string;
  type: ProductClothesEnum;
  price: number;
  discount: number;
  totalPrice: number;
  description: string;
  features: string[];
}
export interface ProductTShirt extends ProductClothesBase {
  albumImages: albumImageTShirtType;
}
export interface ProductHoodie extends ProductClothesBase {
  albumImages: albumImageHoodieType;
}
