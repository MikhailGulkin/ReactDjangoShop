import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CategoriesEnum,
  FilterSliceState,
  SortNameEnum,
  SortPropertyEnum,
  SortType,
} from "@/redux/filters/types";

const initialState: FilterSliceState = {
  currentCategory: CategoriesEnum.ALL,
  currentSort: {
    name: SortNameEnum.PRICE_ASC,
    sortProperty: SortPropertyEnum.PRICE_ASC,
  },
  sortChosen: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortProperty(state, action: PayloadAction<SortType>) {
      state.currentSort = action.payload;
    },
    setCategory(state, action: PayloadAction<CategoriesEnum>) {
      state.currentCategory = action.payload;
    },
    setChosen(state, action: PayloadAction<boolean>) {
      state.sortChosen = action.payload;
    },
  },
});
export const { setSortProperty, setCategory, setChosen } = filterSlice.actions;

export default filterSlice.reducer;
