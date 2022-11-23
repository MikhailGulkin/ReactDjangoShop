import {
  albumImageHoodieType,
  albumImageTShirtType,
  ProductHoodie,
} from "@/@types/pages/Product";
import { ProductTShirt } from "@/@types/pages/Product";
import {
  ColorHoodieEnum,
  ColorTShirtEnum,
} from "@/redux/productProperties/type";

export type ImageBlockType = {
  albumImages: albumImageTShirtType | albumImageHoodieType | undefined;
  pk: number;
};

export type ClothesBottomType = {
  prop: ProductTShirt | ProductHoodie;
  id: number;
};
export type ColorButtonType = {
  stringClass: string;
  colorBtn: ColorTShirtEnum | ColorHoodieEnum;
};
