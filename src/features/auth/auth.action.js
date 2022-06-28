import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from '../../api/authApi'
//  Thunk API
export const loginAction = createAsyncThunk(
    '/login',
    async (params,{rejectWithValue}) => {
      // const response = await authApi.login(params);
      // console.log(response);
      // return response
       try {
        const response = await authApi.login(params);
        const { access_token, token_type, expired_at } = response;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('expired_at', expired_at);
        localStorage.setItem('token_type', token_type);  // expired_at is a timestamp
        return response
        // Save access token to storage
       } catch (error) {
        rejectWithValue(error)
       }
      }
    
  );
  
  export const registerAction = createAsyncThunk(
    '/register',
    async (params,{rejectWithValue}) =>{
      try {
        const response = await authApi.register(params);
      
         return response
      } catch (error) {
        rejectWithValue(error)
      }
    }
  );