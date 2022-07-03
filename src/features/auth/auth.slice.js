import { createSlice} from "@reduxjs/toolkit";
// import { loginAction } from "./auth.action";


const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLogin:false,
        user: null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload.user
        },
        setAuth:(state,action)=>{
            state.user = action.payload.user
            state.isLogin = true
          
        },
        setLogOut:(state)=>{
            state.user = null
            state.isLogin = false
            localStorage.removeItem('access_token');
            localStorage.removeItem('expired_at');
            localStorage.removeItem('token_type');
        }
    }
    
})
export const { setAuth, setLogOut, setUser } = authSlice.actions;
export default authSlice.reducer;