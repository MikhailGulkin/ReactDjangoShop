import React from "react";

import { AddRemoveItem } from "@/components/pages/Cart/utilsComponents/AddRemoveItem";
import { Favorite } from "@/components/pages/Cart/utilsComponents/Favorite";
import { RemoveItem } from "@/components/pages/Cart/utilsComponents/RemoveItem/RemoveItem";

import { ProductTShort } from "@/@types/pages/Product";

export const CartItem: React.FC<ProductTShort> = ({ title, price }) => {
  return (
    <div
      className={`flex items-center justify-between uppercase text-xs sm:text-sm mt-10`}
    >
      <div className="py-4 w-1/4">
        <h1 className="text-xl">{title}</h1>
      </div>
      <AddRemoveItem />
      <div className="px-6 py-4">
        <h1 className="text-2xl">$ {price}</h1>
      </div>
      <div className="px-6 py-4">
        <Favorite />
      </div>
      <div className="py-4 justify-end flex">
        <div>
          <RemoveItem />
        </div>
      </div>
    </div>
  );
};
