import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, CartSliceState, pkType } from "@/redux/cart/type";
import { getItemsLS, setItemsLS } from "@/redux/cart/service";
import { CalcTotal } from "@/utils/calcTotal";
import { getPropertiesLS } from "@/redux/productProperties/service";
import { PkColorSizeType } from "@/@types/pages/CartItem";

const initialState: CartSliceState = {
  ...getItemsLS(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const { propertiesList } = getPropertiesLS();
      const findProp = propertiesList.find(
        (obj) =>
          obj.id === action.payload.pk &&
          obj.color === action.payload.color &&
          obj.size === action.payload.size
      );
      // Если у товара выбрали свойства
      if (findProp) {
        const findItem = state.items.find(
          (obj) =>
            obj.pk === action.payload.pk &&
            obj.color === findProp.color &&
            obj.size === findProp.size
        );
        if (!findItem) {
          action.payload.count++;
          action.payload.color = findProp.color;
          action.payload.size = findProp.size;

          state.items.push(action.payload);
        } else {
          findItem.count++;
        }
        // Если свойство товара по умолчанию
      } else {
        const findItem = state.items.find(
          (obj) =>
            obj.pk === action.payload.pk &&
            obj.color === action.payload.color &&
            obj.size === action.payload.size
        );
        if (!findItem) {
          action.payload.count++;
          state.items.push(action.payload);
        } else {
          findItem.count++;
        }
      }
      state.totalPrice += action.payload.totalPrice;
      setItemsLS(state.items);
    },
    removeItem(state, action: PayloadAction<PkColorSizeType>) {
      const findItem = state.items.find(
        (obj) =>
          obj.pk === action.payload.pk &&
          obj.color === action.payload.color &&
          obj.size === action.payload.size
      );
      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
        setItemsLS(state.items);
      }
    },
    deleteItem(state, action: PayloadAction<PkColorSizeType>) {
      const index = state.items.findIndex(
        (obj) =>
          obj.color === action.payload.color &&
          obj.size === action.payload.size &&
          obj.pk === action.payload.pk
      );
      state.items.splice(index, 1);
      state.totalPrice = CalcTotal(state.items);
      setItemsLS(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      setItemsLS(state.items);
    },
  },
});

export const { addItem, removeItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
