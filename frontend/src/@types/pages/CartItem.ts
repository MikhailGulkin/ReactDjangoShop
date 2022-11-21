import {
  ColorTShirtEnum,
  SizeTShirtEnum,
} from "@/redux/productProperties/type";

export type PkColorSizeType = {
  pk: number;
  color: ColorTShirtEnum;
  size: SizeTShirtEnum;
};
