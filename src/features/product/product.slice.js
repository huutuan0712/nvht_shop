import { createSlice} from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:'product',
    initialState:{
        Products: {}
    },
    reducers:{
        setProduct:(state,action)=>{
            state.Products = action.payload
        },
      
    },
 
})
export const { setProduct } = productSlice.actions;
export default productSlice.reducer;