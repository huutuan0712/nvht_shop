import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCart, getAllCart, getPreview } from "../../api/cartApi";

export const createCartAction = createAsyncThunk(
    "cart/add-cart",
    async (body, { rejectWithValue }) => {
     try {
      const res = await createCart(body);
      return res;
     } catch (error) {
      return rejectWithValue(error);
     }
    }
   );
   export const getPreviewAction = createAsyncThunk(
    "cart/cart-preview",
    async (body, { rejectWithValue }) => {
     try {
      const res = await getPreview(body);
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );
   export const getAllCartAction = createAsyncThunk(
    "cart/get-all-cart",
    async (body, { rejectWithValue }) => {
     try {
      const res = await getAllCart();
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );