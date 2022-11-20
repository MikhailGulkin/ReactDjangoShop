import {
  ColorTShortEnum,
  SizeTShortEnum,
} from "@/redux/productProperties/type";

export type PkColorSizeType = {
  pk: number;
  color: ColorTShortEnum;
  size: SizeTShortEnum;
};