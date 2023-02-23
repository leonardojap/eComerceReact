import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./ShoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCartSlice: shoppingCartSlice,
  },
});
