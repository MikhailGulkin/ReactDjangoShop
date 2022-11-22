import {
    CategoriesEnum,
    SortNameEnum,
    SortPropertyEnum,
    SortType,
} from "@/redux/filters/types";

export const popupList: SortType[] = [
  {
    name: SortNameEnum.PRICE_DESC,
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
  { name: SortNameEnum.PRICE_ASC, sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: SortNameEnum.TITLE_ASC, sortProperty: SortPropertyEnum.TITLE_ASC },
  { name: SortNameEnum.TITLE_DESC, sortProperty: SortPropertyEnum.TITLE_DESC },
];


export const categories = Object.values(CategoriesEnum);
