export enum ColorTShirtEnum {
  BLACK = "black",
  BLUE = "blue",
  GREEN = "green",
}

export enum SizeTShirtEnum {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XL_2 = "2XL",
  XL_3 = "3XL",
}
export interface PropertiesColorType {
  color: ColorTShirtEnum;
  productId: number;
}

export interface PropertiesSizeType {
  size: SizeTShirtEnum;
  productId: number;
}
export interface PropertiesType {
  color: ColorTShirtEnum;
  size: SizeTShirtEnum;
  id: number;
}
export interface PropertiesSliceState {
  propertiesList: PropertiesType[];
}
