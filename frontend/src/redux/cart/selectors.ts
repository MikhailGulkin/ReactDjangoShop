import { RootState } from "@/redux/store";
import {
    ColorHoodieEnum,
    ColorTShirtEnum, ProductClothesEnum,
    SizeTShirtEnum,
} from "@/redux/productProperties/type";

export const cartSelector = (state: RootState) => state.cart;
export const cartItemSelector =
  (
    pk: number,
    color: ColorTShirtEnum | ColorHoodieEnum,
    type: ProductClothesEnum,
    size: SizeTShirtEnum
  ) =>
  (state: RootState) =>
    state.cart.items.find(
      (obj) => obj.pk === pk && obj.color === color && obj.size === size && obj.type === type
    );
