import React from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/redux/store";

import { productPropertiesSelector } from "@/redux/productProperties/selectors";
import { setActiveColor } from "@/redux/productProperties/slice";
import { ColorTShortEnum } from "@/redux/productProperties/type";

type ColorButtonType = {
  stringClass: string;
  colorBtn: ColorTShortEnum;
};

export const ColorButton: React.FC<ColorButtonType> = ({
  stringClass,
  colorBtn,
}) => {
  const { color } = useSelector(productPropertiesSelector);
  const dispatch = useAppDispatch();
  const activeCls = colorBtn === color ? " border-amber-400" : "";
  const setColor = () => {
    dispatch(setActiveColor(colorBtn));
  };
  return (
    <button
      onClick={setColor}
      className={`border-2 border-gray-300 mr-1 ${stringClass}  ${activeCls} rounded-full w-6 h-6 focus:outline-none`}
    ></button>
  );
};
