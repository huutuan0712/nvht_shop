import { createSlice} from "@reduxjs/toolkit";
// import { loginAction } from "./auth.action";


const categorySlice = createSlice({
    name:'category',
    initialState:{
      categories:{}
    },
    reducers:{
        setCategory:(state,action)=>{
            state.categories = action.payload
        },
        
    }
    
})
export const { setCategory} = categorySlice.actions;
export default categorySlice.reducer;