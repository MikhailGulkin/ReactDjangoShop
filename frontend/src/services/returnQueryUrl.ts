import { CategoriesEnum, SortType } from "@/redux/filters/types";

export type returnQueryUrlType = {
  currentCategory: CategoriesEnum;
  currentSort: SortType;
  sortChosen: boolean;
};
export const returnQueryCategory = (currentCategory: CategoriesEnum) => {
  const BlockCat = {
    Hoodie: "/products/all-hoodies/",
    "T-Shirt": "/products/all-t_shirts/",
  };
  return BlockCat[currentCategory];
};

export const returnQueryUrl = (
  currentSort: SortType,
  sortChosen: boolean
): String => {
  return sortChosen ? `?ordering=${currentSort.sortProperty}` : "";
};
