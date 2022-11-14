export enum ColorTShortEnum {
  BLACK = "black",
  GREEN = "green",
  BLUE = "blue",
}

export enum SizeTShortEnum {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XL_2 = "2XL",
  XL_3 = "3XL",
}

export interface PropertiesSliceState {
  color: ColorTShortEnum;
  size: SizeTShortEnum;
}