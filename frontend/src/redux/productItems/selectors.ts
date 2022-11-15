import { RootState } from "@/redux/store";

export const productItemsSelector = (state: RootState) =>
  state.product;