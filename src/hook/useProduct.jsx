import { unwrapResult } from "@reduxjs/toolkit";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    addProductAction,
    deleteProductAction,
    getProductAction,
    getProductCategoryAction,
    getSortProductAction
} from "../features/product/product.action";
import { setProduct } from "../features/product/product.slice";
import { toastError, toastSuccess } from "../utils/toast";
import { useLoading } from "./useLoading";



export const ProductContext =createContext({});
export const useProduct = () => useContext(ProductContext);
export default function ProductProvider({ children }) {
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
        toastSuccess(res.message);
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
      loading?.show();
      dispatch(deleteProductAction({ id }))
       .then(unwrapResult)
       .then((res) => {
        toastSuccess(res.message);
        fetchProduct();
       })
       .catch((err) => {
        toastError(err.message);
       })
       .finally(() => loading?.hide());
     };
    const getSortProduct = ()=>{
        loading?.show()
        dispatch(getSortProductAction())
        .then(unwrapResult)
        .then(res=>{ dispatch(setProduct(res))
          console.log(res)
        })
        .catch(err=>{console.log(err)})
        .finally(loading?.hide())
    }
     useEffect(() => {
      fetchProduct();
      // getSortProduct()
     }, []);
    return (
      <ProductContext.Provider
       value={{
        // getSortProduct,
        fetchProduct,
        deleteProduct,
        addProduct,
        products,
        getProduct,
        productCate
       }}>
       {children}
      </ProductContext.Provider>
     );
     
    
}