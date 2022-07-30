import { createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        carts: [],
        preview:[]
    },
    reducers:{
        setCart(state, action) {
            state.carts = action.payload;
           },
        setPreview(state, action) {
            state.preview = action.payload;
           },
      
    },
 
})
export const { setCart,setPreview } = cartSlice.actions;
export default cartSlice.reducer;