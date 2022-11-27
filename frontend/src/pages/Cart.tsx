import React from "react";

import { useSelector } from "react-redux";
import { cartSelector } from "@/redux/cart/selectors";

import { CartItem } from "@/components/pages/Cart/CartItem";
import { CartTop } from "@/components/pages/Cart/CartTop";
import { CartBottomBtn } from "@/components/pages/Cart/CartBottomBtn";
import { CartBottomDetails } from "@/components/pages/Cart/CartBottomDetails";

import { ClearCart } from "@/pages/ClearCart";

export const Cart: React.FC = () => {
  const { items } = useSelector(cartSelector);
  if (!items.length) return <ClearCart />;
  const cartItems = items.map((obj) => (
    <CartItem
      key={`${obj.pk} - ${obj.type} - ${obj.color} - ${obj.size}`}
      {...obj}
    />
  ));
  return (
    <div className="container mx-auto max-w-4xl mb-10 mt-16 и">
      <CartTop />
      {cartItems}
      <CartBottomDetails />
      <CartBottomBtn />
    </div>
  );
};
