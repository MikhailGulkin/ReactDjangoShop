import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { SizeTShirtEnum } from "@/redux/productProperties/type";
import { useAppDispatch } from "@/redux/store";
import { productPropertiesSelector } from "@/redux/productProperties/selectors";
import { setActiveSize } from "@/redux/productProperties/slice";

import { defineProductIdFunc } from "@/utils/defineProductId";
import { hasSizeColor } from "@/utils/hasColor";

import { Arrow } from "@/components/ui/svg/Arrow";
import { useLocation } from "react-router";
import { getUrlName } from "@/utils/getUrlName";

export const SizeOptions: React.FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const location = useLocation();
  const pageName = getUrlName(location);

  const defineProductId = defineProductIdFunc(productId);

  const { propertiesList } = useSelector(productPropertiesSelector);
  const propertiesEle = hasSizeColor(propertiesList, pageName, defineProductId);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (SizeTShirtEnum)
      dispatch(
        setActiveSize({
          size: event.target.value as SizeTShirtEnum,
          type: pageName,
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
          {Object.values(SizeTShirtEnum).map((size, index) => (
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
