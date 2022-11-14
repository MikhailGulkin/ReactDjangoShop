import { CartItemType } from "@/redux/cart/type";
import { CalcTotalPrice } from "@/utils/calcTotalPrice";

export const setItemsLS = (items: CartItemType[]) => {
  const json = JSON.stringify(items);
  localStorage.setItem("cart", json);
};
export const getItemsLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = CalcTotalPrice(items);
  return {
    items: items as CartItemType[],
    totalPrice: totalPrice as number,
  };
};
