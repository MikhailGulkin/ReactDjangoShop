import React from "react";

import { paths } from "@/routing/config";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { productPropertiesSelector } from "@/redux/productProperties/selectors";

import { returnValidColor } from "@/utils/hasColor";

import { ProductTShirt } from "@/@types/pages/Product";

export const ProductItem: React.FC<ProductTShirt> = ({
  pk,
  price,
  albumImages,
  title,
}) => {
  const { propertiesList } = useSelector(productPropertiesSelector);
  return (
    <Link
      to={paths.itemsPage(pk)}
      className="h-120 w-72 rounded shadow-lg mx-auto border hover:scale-105"
    >
      <div className="h-72 relative">
        <img
          src={returnValidColor(propertiesList, pk, albumImages)}
          alt={title}
        />
      </div>
      <div className="h-48 relative">
        <div className="text-2xl pt-4 px-4 font-semibold">{title}</div>
        <div className="bg-blue-300 font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2  rounded-tl-sm ">
          $<span className="text-lg">{price}</span>
        </div>
      </div>
    </Link>
  );
};
