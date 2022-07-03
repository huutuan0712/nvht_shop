import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../../api/categoryApi";




export const getCategoryAction = createAsyncThunk(
    "/categorys",
    async (body, { rejectWithValue }) => {
     try {
      const res = await getCategory();
      return res;
     } catch (error) {
      return rejectWithValue(error);
     }
    }
   );
   export const createCategoryAction = createAsyncThunk(
    "/category",
    async (body, { rejectWithValue }) => {
     try {
      const res = await createCategory(body);
      return res;
     } catch (error) {
      return rejectWithValue(error);
     }
    }
   );
   export const updateCategoryAction = createAsyncThunk(
    "/category",
    async (data, { rejectWithValue }) => {
     try {
      const res = await updateCategory(data.id,data.update);
      console.log(res);
      return res;
     } catch (error) {
      return rejectWithValue(error);
     }
    }
   );
   export const deleteCategoryAction = createAsyncThunk(
    "/category",
    async (body, { rejectWithValue }) => {
     try {
      const res = await deleteCategory(body);
      return res;
     } catch (error) {
      return rejectWithValue(error);
     }
    }
   );