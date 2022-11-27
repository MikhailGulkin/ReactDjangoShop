import { RootState } from "@/redux/store";
import { favoriteItem } from "@/redux/favoriteItem/types";
import { ProductClothesEnum } from "@/redux/productProperties/type";

export const favoriteProductsSelector = (state: RootState) => state.favorite;

export const favoriteProductSelector =
  (type: ProductClothesEnum, pk: number) => (state: RootState) => {
    return state.favorite.favoriteItemList.find(
      (obj: favoriteItem) => obj.type === type && obj.id === pk
    );
  };
