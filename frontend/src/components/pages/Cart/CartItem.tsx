import React from "react";

import { Link } from "react-router-dom";
import { paths } from "@/routing/config";

import { useSelector } from "react-redux";
import { cartItemSelector } from "@/redux/cart/selectors";
import { CartItemType } from "@/redux/cart/type";
import { useLocation } from "react-router";

import { AddRemoveItem } from "@/components/pages/Cart/utilsComponents/AddRemoveItem";
import { Favorite } from "@/components/pages/Cart/utilsComponents/Favorite";
import { DeleteItem } from "@/components/pages/Cart/utilsComponents/DeleteItem";

import { getUrlName } from "@/utils/getUrlName";

import { ColorBtnCls } from "@/consts/Clothes";

export const CartItem: React.FC<CartItemType> = ({
  pk,
  title,
  price,
  color,
  count,
  size,
}) => {
  const item = useSelector(cartItemSelector(pk, color, size));

  return (
    <div
      className={`flex items-center justify-between uppercase text-xs sm:text-sm mt-10`}
    >
      <div className="py-4 w-1/4">
        <Link to={paths.itemsTShirtPage(pk)}>
          <h1 className="text-xl truncate">{title}</h1>
        </Link>
        <div className="flex items-center">
          <button
            disabled={true}
            className={`border-2  mr-1 ${
              ColorBtnCls[item.?type as keyof typeof ColorBtnCls][
                item?.color ? item?.color : "black"
              ]
            } rounded-full w-6 h-6 focus:outline-none`}
          ></button>
          <h1 className="text-xl font-bold">{item?.size}</h1>
        </div>
      </div>
      <AddRemoveItem pk={pk} color={color} size={size} />
      <div className="px-6 py-4">
        <h1 className="text-2xl">$ {(price * count).toFixed(2)}</h1>
      </div>
      <div className="px-6 py-4">
        <Favorite />
      </div>
      <div className="py-4  justify-end flex">
        <div>
          <DeleteItem pk={pk} color={color} size={size} />
        </div>
      </div>
    </div>
  );
};
