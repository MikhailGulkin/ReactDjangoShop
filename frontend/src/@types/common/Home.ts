import {ProductTShort} from "@/@types/pages/Product";

export type PropsType = {
  stringClass: String;
  props: ProductTShort;
};
export type MainPartType = {
  styleList: string[];
  clothes: ProductTShort[];
};
export type SkeletonType = {
  dividerSize: number;
};