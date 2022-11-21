import { albumImageType } from "@/@types/pages/Product";
import { ProductTShort } from "@/@types/pages/Product";
import { ColorTShortEnum } from "@/redux/productProperties/type";

export type ImageBlockType = {
  albumImages: albumImageType | undefined;
  pk: number;
};

export type ClothesBottomType = {
  prop: ProductTShort;
  id: number;
};
export type ColorButtonType = {
  stringClass: string;
  colorBtn: ColorTShortEnum;
};