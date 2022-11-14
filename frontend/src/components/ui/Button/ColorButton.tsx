import React from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/redux/store";

import { productPropertiesSelector } from "@/redux/productProperties/selectors";
import { setActiveColor } from "@/redux/productProperties/slice";
import { ColorTShortEnum } from "@/redux/productProperties/type";
import { useParams } from "react-router-dom";

import { hasColor } from "@/utils/hasColor";

type ColorButtonType = {
  stringClass: string;
  colorBtn: ColorTShortEnum;
};

export const ColorButton: React.FC<ColorButtonType> = ({
  stringClass,
  colorBtn,
}) => {
  const { productId } = useParams();
  const defineProductId = productId ? parseInt(productId) : -1;
  const { propertiesList } = useSelector(productPropertiesSelector);

  const propertiesEle = hasColor(propertiesList, defineProductId);
  const dispatch = useAppDispatch();
  let activeCls;
  if (propertiesEle)
    activeCls = colorBtn === propertiesEle.color ? " border-amber-400" : "";
  else {
    activeCls = colorBtn === ColorTShortEnum.BLACK ? "border-amber-400" : "";
  }
  const setColor = () => {
    dispatch(setActiveColor({ color: colorBtn, productId: defineProductId }));
  };
  return (
    <button
      onClick={setColor}
      className={`border-2 border-gray-300 mr-1 ${stringClass}  ${activeCls} rounded-full w-6 h-6 focus:outline-none`}
    ></button>
  );
};
