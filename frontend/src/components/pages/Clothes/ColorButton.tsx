import React from "react";

type ColorButtonType = {
  stringClass: string;
};

export const ColorButton: React.FC<ColorButtonType> = ({ stringClass }) => {
  return (
    <button
      className={`border-2 border-gray-300 mr-1 ${stringClass} rounded-full w-6 h-6 focus:outline-none`}
    ></button>
  );
};
