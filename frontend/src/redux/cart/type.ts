import { ProductTShort } from "@/@types/pages/Product";

export interface CartItemType extends ProductTShort {
  count: number;
}

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
