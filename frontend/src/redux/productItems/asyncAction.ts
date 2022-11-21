import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ProductTShirt } from "@/@types/pages/Product";

export const fetchProducts = createAsyncThunk<ProductTShirt[]>(
  "product/fetchProductStatus",
  async () => {
    const { data } = await axios.get(
      `http://localhost:8000/products/all-t_shorts/`
    );
    return data.results;
  }
);
