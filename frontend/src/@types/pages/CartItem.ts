import {
    ColorHoodieEnum,
    ColorTShirtEnum, ProductClothesEnum,
    SizeTShirtEnum,
} from "@/redux/productProperties/type";

export type PkColorSizeType = {
  pk: number;
  color: ColorTShirtEnum | ColorHoodieEnum;
  type: ProductClothesEnum
  size: SizeTShirtEnum;
};
