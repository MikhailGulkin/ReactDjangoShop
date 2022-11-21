import { RootState } from "@/redux/store";
import {
  ColorTShirtEnum,
  SizeTShirtEnum,
} from "@/redux/productProperties/type";

export const cartSelector = (state: RootState) => state.cart;
export const cartItemSelector =
  (pk: number, color: ColorTShirtEnum, size: SizeTShirtEnum) =>
  (state: RootState) =>
    state.cart.items.find(
      (obj) => obj.pk === pk && obj.color === color && obj.size === size
    );
