import React from "react";
import { useSelector } from "react-redux";

import { paths } from "@/routing/config";
import { productPropertiesSelector } from "@/redux/productProperties/selectors";
import { hasColor } from "@/utils/hasColor";
import { Link } from "react-router-dom";

import { ProductTShort } from "@/@types/pages/Product";

export const ProductItem: React.FC<ProductTShort> = ({
  pk,
  price,
  album_images,
  title,
}) => {
  const { propertiesList } = useSelector(productPropertiesSelector);
  const colorSize = hasColor(propertiesList, pk);
  return (
    <Link
      to={paths.itemsPage(pk)}
      className="h-120 w-72 rounded shadow-lg mx-auto border hover:scale-105"
    >
      <div className="h-72 relative">
        <img
          src={
            colorSize ? album_images[colorSize.color][0] : album_images.black[0]
          }
          alt={title}
        />
      </div>
      <div className="h-48 relative">
        <div className="text-2xl pt-4 px-4 font-semibold">{title}</div>
        <div
          className="bg-blue-300 font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2  rounded-tl-sm "
        >
          $<span className="text-lg">{price}</span>
        </div>
      </div>
    </Link>
  );
};
