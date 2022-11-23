import { ProductHoodie, ProductTShirt } from "@/@types/pages/Product";

export enum ProductStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
export interface ProductSliceState {
  items: ProductTShirt[] | ProductHoodie[];
  status: ProductStatus;
}
