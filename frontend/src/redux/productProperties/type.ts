import exp from "constants";

export enum ColorTShirtEnum {
  BLACK = "black",
  BLUE = "blue",
  GREEN = "green",
}

export enum ColorHoodieEnum {
  BLACK = "black",
  BLUE = "blue",
  white = "white",
}

export enum SizeTShirtEnum {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XL_2 = "2XL",
  XL_3 = "3XL",
}

export enum ProductClothesEnum {
  HOODIE = "Hoodie",
  TSHIRT = "T-Shirt",
}

interface PropertiesColorSizeTypeBase {
  type: ProductClothesEnum;
  productId: number;
}

export interface PropertiesColorType extends PropertiesColorSizeTypeBase {
  color: ColorTShirtEnum | ColorHoodieEnum;
}

export interface PropertiesSizeType extends PropertiesColorSizeTypeBase {
  size: SizeTShirtEnum;
}

export interface PropertiesType {
  color: ColorTShirtEnum | ColorHoodieEnum;
  size: SizeTShirtEnum;
  type: ProductClothesEnum;
  id: number;
}

export interface PropertiesSliceState {
  propertiesList: PropertiesType[];
}
