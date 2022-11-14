export enum ColorTShortEnum {
  BLACK = "black",
  BLUE = "blue",
  GREEN = "green",
}

export enum SizeTShortEnum {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XL_2 = "2XL",
  XL_3 = "3XL",
}
export interface PropertiesColorType {
  color: ColorTShortEnum;
  productId: number;
}

export interface PropertiesSizeType {
  size: SizeTShortEnum;
  productId: number;
}
export interface PropertiesType {
  color: ColorTShortEnum;
  size: SizeTShortEnum;
  id: number;
}
export interface PropertiesSliceState {
  propertiesList: PropertiesType[];
}
