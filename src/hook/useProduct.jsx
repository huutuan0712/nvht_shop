import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction, deleteProductAction, getProductAction, getProductCategoryAction } from "../features/product/product.action";
import { setProduct } from "../features/product/product.slice";
import { useLoading } from "./useLoading";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [productCate, setProductCate] = useState([]);
  const loading = useLoading();
    const dispatch = useDispatch();
    const fetchProduct = async () => {
      dispatch(getProductAction({}))
        .then(unwrapResult)
        .then((res) =>dispatch(setProduct(res)))
        .catch((error) => {
          console.log(error.message);
        });
    };
    const addProduct = (formData) => {
      loading?.show();
      dispatch(addProductAction(formData))
       .then(unwrapResult)
       .then((res) => {
        console.log(res.message);
       })
       .catch((err) => {
        loading?.hide();
        console.log(err.message);
       })
       .finally(() => loading?.hide());
     };
     const getProduct = (path) => {
      loading?.show();
      dispatch(getProductCategoryAction(path))
       .then(unwrapResult)
       .then((res) => {
        setProductCate(res);
       })
       .finally(() => loading?.hide());
     };
    
    const deleteProduct = (id) => {
      dispatch(deleteProductAction({ id }))
       .then(unwrapResult)
       .then((res) => {
        console.log(res.message);
        fetchProduct();
       })
       .catch(() => {
        console.log(error.message);
       })
     };
    return {fetchProduct,products,deleteProduct,addProduct,getProduct,productCate}
}