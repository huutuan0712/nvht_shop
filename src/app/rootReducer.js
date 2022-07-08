import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/auth.slice";
import cartSlice from "../features/cart/cart.slice";
import categorySlice from "../features/category/category.slice";
import productSlice from "../features/product/product.slice";

export const rootReducer = combineReducers({
   auth:authSlice,
   category:categorySlice,
   product:productSlice,
   cart:cartSlice
})