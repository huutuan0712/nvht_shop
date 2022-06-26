import { createSlice} from "@reduxjs/toolkit";
import { loginAction } from "./auth.action";


const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLogin:false,
        user:null
    },
    reducers:{
        // setAuth:(state,action)=>{
        //     state.user = action.payload.user
        //     state.isLogin = true
          
        // }
        setLogOut:(state,action)=>{
            state.user = null
            state.isLogin = false
            
        }
    },
    extraReducers:{
        [loginAction.fulfilled]:(state,action)=>{
            state.user = action.payload.user
            state.isLogin = true
            console.log('login success');
        },
        [loginAction.rejected]:(state,action)=>{
        
            console.log('login error');
        }
    }
})
export const { setAuth, setLogOut, setUser } = authSlice.actions;
export default authSlice.reducer;