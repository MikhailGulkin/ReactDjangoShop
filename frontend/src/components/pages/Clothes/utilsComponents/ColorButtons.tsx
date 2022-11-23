import React from "react";

import { ColorButton } from "@/components/pages/Clothes/utilsComponents/ColorButton";

import { ColorTShirtEnum } from "@/redux/productProperties/type";
import { ColorHoodieEnum } from "@/redux/productProperties/type";

import { ColorBtnCls } from "@/consts/Clothes";
import { useLocation } from "react-router";
import { getUrlName } from "@/utils/getUrlName";

export const ColorButtons: React.FC = () => {
  const location = useLocation();
  const pageName = getUrlName(location);
  return (
    <div className="flex">
      <span className="mr-3">Color</span>
      {ColorBtnCls[pageName as keyof typeof ColorBtnCls].map((obj, index) => (
        <ColorButton
          key={index}
          stringClass={obj}
          colorBtn={
            pageName === "Hoodie"
              ? Object.values(ColorHoodieEnum)[index]
              : Object.values(ColorTShirtEnum)[index]
          }
        />
      ))}
    </div>
  );
};
