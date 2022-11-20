import React from "react";

import { useSelector } from "react-redux";
import { clearCart } from "@/redux/cart/slice";
import { useAppDispatch } from "@/redux/store";
import { cartSelector } from "@/redux/cart/selectors";

import { Cart } from "@/components/ui/svg/Cart";
import { TrashBucket } from "@/components/ui/svg/TrashBucket";

import style from "./CartItem.module.scss";

export const CartTop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useSelector(cartSelector);
  const clearCartOnClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="pb-4 border-b-blue-200 border-b flex justify-between">
      <h2
        className={`flex items-center text-3xl font-bold ${style.cartTopSvg}`}
      >
        <Cart />
        Cart
      </h2>
      {items.length > 0 && (
        <div
          onClick={clearCartOnClick}
          className={`flex ${style.cartTopClear}`}
        >
          <TrashBucket />
          <span>Clear cart</span>
        </div>
      )}
    </div>
  );
};
