import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productSlice from "./productDataSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    productData: productSlice,
  },
});
