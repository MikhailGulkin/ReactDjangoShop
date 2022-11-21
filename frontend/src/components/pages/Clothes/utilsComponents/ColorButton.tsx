import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";
import { productPropertiesSelector } from "@/redux/productProperties/selectors";
import { setActiveColor } from "@/redux/productProperties/slice";

import { ColorTShirtEnum } from "@/redux/productProperties/type";

import { hasSizeColor } from "@/utils/hasColor";
import { defineProductIdFunc } from "@/utils/defineProductId";

import { ColorButtonType } from "@/@types/pages/Clothes";

export const ColorButton: React.FC<ColorButtonType> = ({
  stringClass,
  colorBtn,
}) => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const defineProductId = defineProductIdFunc(productId);

  const { propertiesList } = useSelector(productPropertiesSelector);
  const propertiesEle = hasSizeColor(propertiesList, defineProductId);
  let activeCls;
  if (propertiesEle)
    activeCls =
      colorBtn === propertiesEle.color
        ? " border-amber-400"
        : "border-gray-300";
  else
    activeCls =
      colorBtn === ColorTShirtEnum.BLACK
        ? "border-amber-400"
        : "border-gray-300";

  const setColor = () => {
    dispatch(
      setActiveColor({
        color: colorBtn,
        productId: defineProductId,
      })
    );
  };
  return (
    <button
      onClick={setColor}
      className={`border-2  mr-1 ${stringClass}  ${activeCls} rounded-full w-6 h-6 focus:outline-none`}
    ></button>
  );
};
