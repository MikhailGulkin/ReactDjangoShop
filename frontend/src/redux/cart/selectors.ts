import { RootState } from "@/redux/store";
import {
  ColorTShortEnum,
  SizeTShortEnum,
} from "@/redux/productProperties/type";

export const cartSelector = (state: RootState) => state.cart;
export const cartItemSelector =
  (pk: number, color: ColorTShortEnum, size: SizeTShortEnum) =>
  (state: RootState) =>
    state.cart.items.find(
      (obj) => obj.pk === pk && obj.color === color && obj.size === size
    );
