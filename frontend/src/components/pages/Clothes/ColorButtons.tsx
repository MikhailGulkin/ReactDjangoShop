import React from "react";

import { ColorButton } from "@/components/pages/Clothes/ColorButton";

import { ColorTShortEnum } from "@/redux/productProperties/type";

export const ColorButtons: React.FC = () => {

  return (
    <div className="flex">
      <span className="mr-3">Color</span>
      {["bg-black", "bg-blue-600", "bg-green-500"].map((obj, index) => (
        <ColorButton
          key={index}
          stringClass={obj}
          colorBtn={Object.values(ColorTShortEnum)[index]}
        />
      ))}
    </div>
  );
};
