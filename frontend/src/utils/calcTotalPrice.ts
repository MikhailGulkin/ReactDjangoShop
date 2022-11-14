import { CartItemType } from "@/redux/cart/type";

export const CalcTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, item) => sum + item.price * item.count, 0);
};
