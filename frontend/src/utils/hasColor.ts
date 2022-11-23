import {
  ProductClothesEnum,
  PropertiesType,
} from "@/redux/productProperties/type";
import {
  albumImageHoodieType,
  albumImageTShirtType,
} from "@/@types/pages/Product";

export const hasSizeColor = (
  colorList: PropertiesType[],
  type: ProductClothesEnum,
  productId: number
) => {
  return colorList.find((obj) => obj.id === productId && obj.type === type);
};

export const returnValidColor = (
  colorList: PropertiesType[],
  productId: number,
  type: ProductClothesEnum,
  albumImages: albumImageTShirtType | albumImageHoodieType
) => {
  const colorSize = hasSizeColor(colorList, type, productId);
  // @ts-ignore
  return colorSize ? albumImages[colorSize.color][0] : albumImages.black[0];
};

export const returnValidColors = (
  colorList: PropertiesType[],
  type: ProductClothesEnum,
  productId: number,
  albumImages: albumImageTShirtType | albumImageHoodieType
) => {
  const colorSize = hasSizeColor(colorList, type, productId);
  // @ts-ignore
  return colorSize ? albumImages[colorSize.color] : albumImages.black;
};
