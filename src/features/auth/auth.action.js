import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi, { changePassword, forgotPassword, updateInformation, updatePassword, verifiedEmail } from '../../api/authApi'

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
          return   rejectWithValue(error)
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
       return  rejectWithValue(error)
      }
    }
  );
  export const logOutAction = createAsyncThunk(
    '/logout',
    async (params,{rejectWithValue}) =>{
      try {
        const response = await authApi.logout(params);
         return response
      } catch (error) {
       return  rejectWithValue(error)
      }
    }
  );
    export const changePasswordAction = createAsyncThunk(
    'auth/change-pass',
    async (params,{rejectWithValue}) =>{
      try {
        const response = await changePassword(params);
      
         return response
      } catch (error) {
      
       return  rejectWithValue(error)

      }
    }
  );
  // export const LogoutAction = createAsyncThunk(
  //   '/logout',
  //   async (params,{rejectWithValue}) =>{
  //     try {
  //       const response = await authApi.logout(params);
  //       console.log("🚀 ~ file: auth.action.js ~ line 33 ~ error", response)
  //        return response
  //     } catch (error) {
      
  //      return  rejectWithValue(error)

  //     }
  //   }
  // );
  export const updateInformationdAction = createAsyncThunk(
    'auth/user-profile',
    async (params,{rejectWithValue}) =>{
      try {
        const response = await updateInformation(params);
        console.log("🚀 ~ file: auth.action.js ~ line 33 ~ error", response)
         return response
      } catch (error) {
      
       return  rejectWithValue(error)

      }
    }
  );
  export const verifiedEmailAction = createAsyncThunk(
    '/email/verify/',
    async (params,{rejectWithValue})=>{
      try {
        const res = await verifiedEmail(params)
        return res;
      } catch (error) {
        return rejectWithValue(error)
      }
    }
  );
  export const forgotPassWordAction= createAsyncThunk(
    '/forgot-password',
    async (body,{rejectWithValue})=>{
      try {
        const res = await forgotPassword(body);
        return res;
      } catch (error) {
        return rejectWithValue(error)
      }
    }
  );
  export const updatePassWordAction = createAsyncThunk(
    '/update-password',
    async(body,{rejectWithValue})=>{
      try {
        const res = await updatePassword(body);
        return res
      } catch (error) {
        return rejectWithValue(error)
      }
    }
  );