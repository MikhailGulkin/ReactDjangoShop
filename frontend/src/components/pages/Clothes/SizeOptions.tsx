import React from "react";
import { Arrow } from "@/components/ui/svg/Arrow";

import { SizeTShortEnum } from "@/redux/productProperties/type";

export const SizeOptions: React.FC = () => {

  return (
    <div className="flex ml-6 items-center">
      <span className="mr-3">Size</span>
      <div className="relative">
        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
          {Object.values(SizeTShortEnum).map((size, index) => (
            <option key={index}>{size}</option>
          ))}
        </select>
        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
          <Arrow />
        </span>
      </div>
    </div>
  );
};
