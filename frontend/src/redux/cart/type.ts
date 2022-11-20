import { ProductTShort } from "@/@types/pages/Product";
import {
  ColorTShortEnum,
  SizeTShortEnum,
} from "@/redux/productProperties/type";

export interface CartItemType extends ProductTShort {
  count: number;
  size: SizeTShortEnum;
  color: ColorTShortEnum;
}

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
export type pkType = {
  pk: number;
};
