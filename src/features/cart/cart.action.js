import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeStatus, createCart,  deleteCart,  getAllCart,  getCartTotal,  getCartUser, getPreview, myOrder, payWithPayment, payWithPaymentMoMo, updateCart } from "../../api/cartApi";

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

   export const DeleteCartAction = createAsyncThunk(
    "cart/delete-cart",
    async (body, { rejectWithValue }) => {
       try {
        const res = await deleteCart(body);
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );
   export const updateCartAction = createAsyncThunk(
    "cart/update-cart",
    async (body, { rejectWithValue }) => {
       try {
        const res = await updateCart(body);
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );
   export const getCartUserAction = createAsyncThunk(
    "cart/get-user",
    async (params, { rejectWithValue }) => {
     try {
      const res = await getCartUser(params);
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );
   export const getCartTotalAction = createAsyncThunk(
      "cart/total-cart",
      async (params, { rejectWithValue }) => {
       try {
        const res = await getCartTotal(params);
        return res;
       } catch (error) {
        rejectWithValue(error);
       }
      }
     );
   export const payWithPaymentAction = createAsyncThunk(
    "cart/placeorder",
    async (body, { rejectWithValue }) => {
     try {
      const res = await payWithPayment(body);
      
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );
   export const payWithPaymenMoMotAction = createAsyncThunk(
    "momo-payment",
    async (body, { rejectWithValue }) => {
     try {
      const res = await payWithPaymentMoMo(body);
      
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );
   export const getAllCartAction = createAsyncThunk(
    "admin/cart-order",
    async (body, { rejectWithValue }) => {
     try {
      const res = await getAllCart(body);
      
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );
   export const changeStatusAction = createAsyncThunk(
    "admin/cart-status",
    async (body, { rejectWithValue }) => {
     try {
      const res = await changeStatus(body);
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );
   export const myOrderAction = createAsyncThunk(
    "cart/my-order",
    async (body, { rejectWithValue }) => {
     try {
      const res = await myOrder(body);
      return res;
     } catch (error) {
      rejectWithValue(error);
     }
    }
   );