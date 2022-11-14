import { configureStore } from "@reduxjs/toolkit";

// import authSlice from "./auth/slice";
import { useDispatch } from "react-redux";
import cart from "./cart/slice";
import productProperties from "./productProperties/slice";

export const store = configureStore({
  reducer: { cart, productProperties },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
