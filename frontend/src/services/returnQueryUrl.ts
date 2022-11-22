import { SortType } from "@/redux/filters/types";

export type returnQueryUrlType = {
  currentSort: SortType;
  sortChosen: boolean;
};

export const returnQueryUrl = (
  currentSort:SortType,
  sortChosen:boolean
): String => {
  return sortChosen ? `?ordering=${currentSort.sortProperty}` : "";
};
