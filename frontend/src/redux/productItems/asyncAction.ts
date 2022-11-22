import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ProductTShirt } from "@/@types/pages/Product";
import { returnQueryUrl, returnQueryUrlType } from "@/services/returnQueryUrl";

export const fetchProducts = createAsyncThunk<
  ProductTShirt[],
  returnQueryUrlType
>("product/fetchProductStatus", async ({ currentSort, sortChosen }) => {
  const { data } = await axios.get(
    `http://localhost:8000/products/all-t_shorts/${returnQueryUrl(
      currentSort,
      sortChosen
    )}`
  );
  return data.results;
});
