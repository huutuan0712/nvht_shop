import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, getProduct, getProductByCategory, getProductDetail } from "../../api/productApi";

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
   export const deleteProductAction = createAsyncThunk(
    "/product",
    async (body, { rejectWithValue }) => {
     try {
      const res = await deleteProduct(body);
      return res;
     } catch (error) {
      return rejectWithValue(error);
     }
    }
   );
   export const getProductDetailAction = createAsyncThunk(
    "product",
    async (id, { rejectWithValue }) => {
     try {
      const res = await getProductDetail(id);
      
      return res;
     } catch (error) {
        return rejectWithValue(error);
     }
    }
   );
   export const getProductCategoryAction = createAsyncThunk(
      "/product/get-category",
      async (path, { rejectWithValue }) => {
       try {
        const res = await getProductByCategory(path);
        
        return res;
       } catch (error) {
        return rejectWithValue(error);
       }
      }
     );