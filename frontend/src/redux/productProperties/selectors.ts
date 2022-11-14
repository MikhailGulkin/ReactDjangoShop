import { RootState } from "@/redux/store";

export const productPropertiesSelector = (state: RootState) =>
  state.productProperties;