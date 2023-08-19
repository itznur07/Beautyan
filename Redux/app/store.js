import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cartSlice/cartSlice";
import productSlice from "../productSlice/productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    carts: cartSlice,
  },
});
