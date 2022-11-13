import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, CartSliceState } from "@/redux/cart/type";

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj) => obj.pk === action.payload.pk);
      if (!findItem) {
        action.payload.count++;
        state.items.push(action.payload);
      } else {
        findItem.count++;
      }
      state.totalPrice += action.payload.price;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
