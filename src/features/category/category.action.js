import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from '../../api/categoryApi'


export const getCategoryAction = createAsyncThunk(
    '/categorys',
    async (params,{rejectWithValue}) =>{
      try {
        const response = await categoryApi.getCategory();
        console.log("🚀 ~ file: category.action.js ~ line 8 ~ response", response)
         return response
      } catch (error) {
       return  rejectWithValue(error)
      }
    }
  );