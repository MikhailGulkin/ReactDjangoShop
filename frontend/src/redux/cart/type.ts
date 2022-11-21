import { ProductTShirt } from "@/@types/pages/Product";
import {
  ColorTShirtEnum,
  SizeTShirtEnum,
} from "@/redux/productProperties/type";

export interface CartItemType extends ProductTShirt {
  count: number;
  size: SizeTShirtEnum;
  color: ColorTShirtEnum;
}

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
export type pkType = {
  pk: number;
};
