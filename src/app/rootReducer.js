import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/auth.slice";
import categorySlice from "../features/category/category.slice";

export const rootReducer = combineReducers({
   auth:authSlice,
   category:categorySlice
})