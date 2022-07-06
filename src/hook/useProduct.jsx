import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductAction } from "../features/product/product.action";
import { setProduct } from "../features/product/product.slice";

export default function useProduct() {
  const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const fetchProduct = async () => {
      dispatch(getProductAction({}))
        .then(unwrapResult)
        .then((res) =>dispatch(setProduct(res)))
        .catch((error) => {
          console.log(error.message);
        });
    };
    return {fetchProduct,products}
}