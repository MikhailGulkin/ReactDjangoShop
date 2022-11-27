import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFavoriteLS, setFavoriteLS } from "@/redux/favoriteItem/services";
import {
  favoriteItem,
  favoriteItemStateType,
} from "@/redux/favoriteItem/types";

const initialState: favoriteItemStateType = {
  ...getFavoriteLS(),
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite(state, action: PayloadAction<favoriteItem>) {
      const indexEle = state.favoriteItemList.findIndex(
        (obj: favoriteItem) =>
          obj.id === action.payload.id && obj.type === action.payload.type
      );
      if (indexEle !== -1) {
        state.favoriteItemList.splice(indexEle, 1);
      } else {
        state.favoriteItemList.push(action.payload);
      }

      setFavoriteLS(state.favoriteItemList);
    },
  },
});
export const { setFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
