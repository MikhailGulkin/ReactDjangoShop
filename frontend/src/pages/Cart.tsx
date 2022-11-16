import React from "react";

import { CartItem } from "@/components/pages/Cart/CartItem";
import { CartTop } from "@/components/pages/Cart/CartTop";
import { CartBottomBtn } from "@/components/pages/Cart/CartBottomBtn";
import { CartBottomDetails } from "@/components/pages/Cart/CartBottomDetails";

import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { cartSelector } from "@/redux/cart/selectors";

export const Cart: React.FC = () => {
  const { items } = useSelector(cartSelector);
  // const dispatch = useAppDispatch();
  const cartItems = items.map((obj) => <CartItem key={obj.pk} {...obj} />);
  return (
    <div className="container mx-auto max-w-4xl mb-10 mt-16">
      <CartTop />
      {cartItems}
      <CartBottomDetails />
      <CartBottomBtn />
    </div>
  );
};
