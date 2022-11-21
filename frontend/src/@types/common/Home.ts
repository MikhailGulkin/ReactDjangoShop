import { ProductTShirt } from "@/@types/pages/Product";

export type PropsType = {
  stringClass: String;
  props: ProductTShirt;
};
export type MainPartType = {
  styleList: string[];
  clothes: ProductTShirt[];
};
export type SkeletonType = {
  dividerSize: number;
};
