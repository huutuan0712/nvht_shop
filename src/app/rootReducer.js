import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/auth.slice";
import categorySlice from "../features/category/category.slice";

export const rootReducer = combineReducers({
   auth:authSlice,
<<<<<<< HEAD
   category:categorySlice   
=======
   category:categorySlice
>>>>>>> 8dd1463e3345b18d1585599e94aecb4366fb2e3f
})