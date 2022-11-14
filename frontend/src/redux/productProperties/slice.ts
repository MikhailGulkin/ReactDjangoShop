import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ColorTShortEnum,
  PropertiesSliceState,
  SizeTShortEnum,
} from "@/redux/productProperties/type";

const initialState: PropertiesSliceState = {
  size: SizeTShortEnum.S,
  color: ColorTShortEnum.BLACK,
};

const productPropertiesSlice = createSlice({
  name: "productProperties",
  initialState,
  reducers: {
        setActiveColor(state, action: PayloadAction<ColorTShortEnum>)
        {
            state.color = action.payload
        }

  },
});

export const { setActiveColor } = productPropertiesSlice.actions;
export default productPropertiesSlice.reducer;
