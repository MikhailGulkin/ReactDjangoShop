import React from "react";
import { albumImageType } from "@/@types/pages/Product";
import { hasColor } from "@/utils/hasColor";
import { useSelector } from "react-redux";
import { productPropertiesSelector } from "@/redux/productProperties/selectors";

type ImageBlockType = {
  album_images: albumImageType | undefined;
  pk: number;
};
export const ImageBlock: React.FC<ImageBlockType> = ({ album_images, pk }) => {
  const { propertiesList } = useSelector(productPropertiesSelector);

  const colorSize = hasColor(propertiesList, pk);
  if (!album_images) {
    return <img alt="eccomerce" src="" />;
  }
  return (
    <img
      alt="ecommerce"
      className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
      src={colorSize ? album_images[colorSize.color][0] : album_images.black[0]}
    />
  );
};
