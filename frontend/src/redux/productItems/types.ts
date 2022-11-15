import {ProductTShort} from "@/@types/pages/Product";

export enum ProductStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
export interface ProductSliceState {
    items: ProductTShort[];
    status: ProductStatus;
}