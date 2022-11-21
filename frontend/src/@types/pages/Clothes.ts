import { albumImageType } from "@/@types/pages/Product";
import { ProductTShirt } from "@/@types/pages/Product";
import { ColorTShirtEnum } from "@/redux/productProperties/type";

export type ImageBlockType = {
  albumImages: albumImageType | undefined;
  pk: number;
};

export type ClothesBottomType = {
  prop: ProductTShirt;
  id: number;
};
export type ColorButtonType = {
  stringClass: string;
  colorBtn: ColorTShirtEnum;
};
