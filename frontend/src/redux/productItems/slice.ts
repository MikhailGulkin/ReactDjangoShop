import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductStatus, ProductSliceState } from "./types";

import { ProductTShirt } from "@/@types/pages/Product";
import { fetchProducts } from "@/redux/productItems/asyncAction";

const initialState: ProductSliceState = {
  items: [],
  status: ProductStatus.LOADING, // loading, success, error
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ProductTShirt[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = ProductStatus.LOADING;
      state.items = [];
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = ProductStatus.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.items = [];
      state.status = ProductStatus.ERROR;
    });
  },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
