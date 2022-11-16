import React from "react";
import { Arrow } from "@/components/ui/svg/Arrow";

import { SizeTShortEnum } from "@/redux/productProperties/type";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "@/redux/store";
import { defineProductIdFunc } from "@/utils/defineProductId";
import { useSelector } from "react-redux";
import { productPropertiesSelector } from "@/redux/productProperties/selectors";
import { hasSizeColor } from "@/utils/hasColor";
import { setActiveSize } from "@/redux/productProperties/slice";

export const SizeOptions: React.FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const defineProductId = defineProductIdFunc(productId);

  const { propertiesList } = useSelector(productPropertiesSelector);
  const propertiesEle = hasSizeColor(propertiesList, defineProductId);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (SizeTShortEnum)
      dispatch(
        setActiveSize({
          size: event.target.value as SizeTShortEnum,
          productId: defineProductId,
        })
      );
  };
  return (
    <div className="flex ml-6 items-center">
      <span className="mr-3">Size</span>
      <div className="relative">
        <select
          defaultValue={propertiesEle?.size}
          onChange={handleChange}
          className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
        >
          {Object.values(SizeTShortEnum).map((size, index) => (
            <option value={size} key={index}>
              {size}
            </option>
          ))}
        </select>
        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
          <Arrow />
        </span>
      </div>
    </div>
  );
};
