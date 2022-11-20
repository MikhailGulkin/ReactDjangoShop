import React from "react";

import { useSelector } from "react-redux";
import { cartSelector } from "@/redux/cart/selectors";

import { CalcTotalProduct } from "@/utils/calcTotal";

export const CartBottomDetails: React.FC = () => {
  const { totalPrice, items } = useSelector(cartSelector);
  return (
    <div className="flex justify-between mt-12 mb-5">
      <span>
        Total product: <b>{CalcTotalProduct(items)} pcs.</b>
      </span>
      <span>
        Total price: <b>$ {totalPrice.toFixed(2)}</b>
      </span>
    </div>
  );
};
