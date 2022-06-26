import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../../api/authApi'
//  Thunk API
export const loginAction = createAsyncThunk(
    'auth/login',
    async (params,{rejectWithValue}) => {
      const response = await authApi.login(params);
      return response
    }
    //  try {
    //   const response = await authApi.login(params);
    //   return response
    //   // Save access token to storage
    //   // const { access_token, token_type, expired_at } = response;
    //   // localStorage.setItem('access_token', access_token);
    //   // localStorage.setItem('expired_at', expired_at);
    //   // localStorage.setItem('token_type', token_type);  // expired_at is a timestamp
    //  } catch (error) {
    //   rejectWithValue(error)
    //  }
    // }
  );
  
  // export const getProfile = createAsyncThunk(
  //   'auth/profile',
  //   async (params) => authApi.getProfile(params)
  // );