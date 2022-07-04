import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct } from "../../api/productApi";

export const getProductAction = createAsyncThunk(
    "/products",
    async (body, { rejectWithValue }) => {
     try {
      const res = await getProduct();  
      return res;
     } catch (error) {
      return rejectWithValue(error);
     }
    }
   );
   export const addProductAction = createAsyncThunk(
    "/product",
    async (body, { rejectWithValue }) => {
     try {
      const res = await createProduct(body);  
      console.log("🚀 ~ file: product.action.js ~ line 20 ~ res", res)
      
      return res;
     } catch (error) {
      return rejectWithValue(error);
     }
    }
   );