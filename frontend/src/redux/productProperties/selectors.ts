import { RootState } from "@/redux/store";
import {
  ColorTShortEnum,
  SizeTShortEnum,
} from "@/redux/productProperties/type";

export const productPropertiesSelector = (state: RootState) =>
  state.productProperties;

export const productPropFind = (pk: number) => (state: RootState) => {
  const findEle = state.productProperties.propertiesList.find(
    (obj) => obj.id === pk
  );
  return findEle
    ? findEle
    : { id: pk, color: ColorTShortEnum.BLACK, size: SizeTShortEnum.S };
};
