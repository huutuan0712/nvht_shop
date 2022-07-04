import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getProductAction } from "../features/product/product.action";
import { setProduct } from "../features/product/product.slice";

export default function useProduct() {
    const dispatch = useDispatch();
    
    const fetchProduct =  () => {
      dispatch(getProductAction())
        .then(unwrapResult)
        .then((res) => dispatch(setProduct(res)))
        .catch((error) => {
          console.log(error.message);
        });
    };
    return {fetchProduct}
}