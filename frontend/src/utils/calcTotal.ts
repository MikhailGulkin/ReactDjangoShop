import { CartItemType } from "@/redux/cart/type";

export const CalcTotal = (items: CartItemType[]) => {
  return items.reduce((sum, item) => sum + item.price * item.count, 0);
};
export const CalcTotalProduct = (items: CartItemType[]) => {
  return items.reduce((sum, item) => sum + item.count, 0);
};
