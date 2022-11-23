import { RootState } from "@/redux/store";
import {
  ColorTShirtEnum,
  ProductClothesEnum,
  SizeTShirtEnum,
} from "@/redux/productProperties/type";

export const productPropertiesSelector = (state: RootState) =>
  state.productProperties;

export const productPropFind =
  (pk: number, type: ProductClothesEnum) => (state: RootState) => {
    const findEle = state.productProperties.propertiesList.find(
      (obj) => obj.id === pk && obj.type === type
    );
    console.log(findEle)
    return findEle
      ? findEle
      : {
          id: pk,
          type: ProductClothesEnum.HOODIE,
          color: ColorTShirtEnum.BLACK,
          size: SizeTShirtEnum.S,
        };
  };
