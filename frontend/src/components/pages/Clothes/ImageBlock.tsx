import React from "react";
import { useSelector } from "react-redux";

import { albumImageType } from "@/@types/pages/Product";

import { productPropertiesSelector } from "@/redux/productProperties/selectors";

import { returnValidColor } from "@/utils/hasColor";

type ImageBlockType = {
  albumImages: albumImageType | undefined;
  pk: number;
};
export const ImageBlock: React.FC<ImageBlockType> = ({ albumImages, pk }) => {
  const { propertiesList } = useSelector(productPropertiesSelector);

  if (!albumImages) {
    return <img alt="eccomerce" src="" />;
  }
  return (
    <img
      alt="ecommerce"
      className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
      src={returnValidColor(propertiesList, pk, albumImages)}
    />
  );
};
