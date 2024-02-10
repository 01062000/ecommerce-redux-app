import { configureStore } from "@reduxjs/toolkit";
import { ProductsReducers } from "./ProductsSlice";
import cartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducers,
    cart: cartSlice,
  },
});
