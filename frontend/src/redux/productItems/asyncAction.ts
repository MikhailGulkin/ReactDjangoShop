import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ProductTShort } from "@/@types/pages/Product";

export const fetchProducts = createAsyncThunk<ProductTShort[]>(
  "product/fetchProductStatus",
  async () => {
    const { data } = await axios.get(
      `http://localhost:8000/products/all-t_shorts/`
    );
    return data.results;
  }
);