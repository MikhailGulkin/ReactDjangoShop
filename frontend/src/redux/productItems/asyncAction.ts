import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ProductTShirt } from "@/@types/pages/Product";
import {
    returnQueryCategory,
    returnQueryUrl,
    returnQueryUrlType
} from "@/services/returnQueryUrl";

export const fetchProducts = createAsyncThunk<
  ProductTShirt[],
  returnQueryUrlType
>("product/fetchProductStatus", async ({ currentSort, currentCategory, sortChosen }) => {
  const { data } = await axios.get(
    `http://localhost:8000${returnQueryCategory(currentCategory)}${returnQueryUrl(
      currentSort,
      sortChosen
    )}`
  );
  return data.results;
});
