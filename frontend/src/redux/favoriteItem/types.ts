import { ProductClothesEnum } from "@/redux/productProperties/type";

export type favoriteItem = {
  type: ProductClothesEnum;
  id: number;
};

export type favoriteItemStateType = {
  favoriteItemList: favoriteItem[];
};
