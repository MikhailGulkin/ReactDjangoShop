import { PropertiesType } from "@/redux/productProperties/type";
import { albumImageType } from "@/@types/pages/Product";

export const hasSizeColor = (
  colorList: PropertiesType[],
  productId: number
) => {
  return colorList.find((obj) => obj.id === productId);
};
export const returnValidColor = (
  colorList: PropertiesType[],
  productId: number,
  albumImages: albumImageType
) => {
  const colorSize = hasSizeColor(colorList, productId);
  return colorSize ? albumImages[colorSize.color][0] : albumImages.black[0];
};
export const returnValidColors = (
  colorList: PropertiesType[],
  productId: number,
  albumImages: albumImageType
) => {
  const colorSize = hasSizeColor(colorList, productId);
  return colorSize ? albumImages[colorSize.color] : albumImages.black;
};
