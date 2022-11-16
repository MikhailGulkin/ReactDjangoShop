import React from "react";
import { Cart } from "@/components/ui/svg/Cart";
import { TrashBucket } from "@/components/ui/svg/TrashBucket";
import style from "./CartItem.module.scss";
export const CartTop: React.FC = () => {
  return (
    <div className="pb-4 border-b-blue-200 border-b flex justify-between">
      <h2
        className={`flex items-center text-3xl font-bold ${style.cartTopSvg}`}
      >
        <Cart />
        Cart
      </h2>
      <div className={`flex ${style.cartTopClear}`}>
        <TrashBucket />
        <span>Clear cart</span>
      </div>
    </div>
  );
};
