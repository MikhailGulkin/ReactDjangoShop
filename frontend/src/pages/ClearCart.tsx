import React from "react";

import { CartTop } from "@/components/pages/Cart/CartTop";
import { CartBottomBtn } from "@/components/pages/Cart/CartBottomBtn";

export const ClearCart: React.FC = () => {
  return (
    <div className="container mx-auto max-w-4xl mb-10 mt-16">
      <CartTop />
      <h1 className="text-center text-5xl font-bold mt-10 mb-10">Cart Empty</h1>
      <CartBottomBtn />
    </div>
  );
};
