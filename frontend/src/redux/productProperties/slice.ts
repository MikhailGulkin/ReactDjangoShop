import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PropertiesColorType,
  PropertiesSliceState,
  SizeTShortEnum,
} from "@/redux/productProperties/type";
import { hasColor } from "@/utils/hasColor";
import {
  getPropertiesLS,
  setPropertiesLS,
} from "@/redux/productProperties/service";

const initialState: PropertiesSliceState = {
  ...getPropertiesLS(),
};

const productPropertiesSlice = createSlice({
  name: "productProperties",
  initialState,
  reducers: {
    setActiveColor(state, action: PayloadAction<PropertiesColorType>) {
      const propElement = hasColor(
        state.propertiesList,
        action.payload.productId
      );
      if (propElement) propElement.color = action.payload.color;
      else {
        state.propertiesList.push({
          id: action.payload.productId,
          color: action.payload.color,
          size: SizeTShortEnum.S,
        });
      }
      setPropertiesLS(state.propertiesList);
    },
  },
});

export const { setActiveColor } = productPropertiesSlice.actions;
export default productPropertiesSlice.reducer;
