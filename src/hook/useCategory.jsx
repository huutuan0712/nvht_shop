import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";;
import { createCategoryAction, deleteCategoryAction, getCategoryAction, updateCategoryAction } from "../features/category/category.action";
import { setCategory } from "../features/category/category.slice";
import { useLoading } from "./useLoading";
import { toastError, toastSuccess } from "../utils/toast";


const CategoryContext = React.createContext([]);
 export const useCategory = () => useContext(CategoryContext);
 

export default function CategoryProvider({ children }) {
  const dispatch = useDispatch();
  const loading = useLoading();
  const fetchCategory =  () => {
    loading?.show();
    dispatch(getCategoryAction())
      .then(unwrapResult)
      .then((res) => dispatch(setCategory(res)))
      .catch((error) => {
        console.log(error.message);
      })
       .finally(() => loading?.hide());
  };
  const addCategory =  (data) => {
    loading?.show();
    dispatch(createCategoryAction(data))
      .then(unwrapResult)
      .then((res) =>{
        toastSuccess(res.message); 
        dispatch(setCategory(res))
      })
      .catch((error) => {
        console.log(error.message);
        toastError(error.message)
      })
      .finally(() => loading?.hide());
  };
  const updateCategory = (id, data, file) => {
    loading?.show();
    let formData = new FormData();
    if (file) {
     formData.append("image", file);
    }
    if (data) {
     for (const [key, value] of Object.entries(data)) {
      formData.append(key, value );
     }
    }
    dispatch(updateCategoryAction({ id, update: formData }))
    
     .then(unwrapResult)
     .then((res) => {
      toastSuccess(res.message);
      fetchCategory();
     })
     .catch((error) => {
      console.log(error);
      toastError(error.message)
    })
    .finally(() => loading?.hide());
     
   };
   const deleteCategory = (id) => {
    loading?.show();
    dispatch(deleteCategoryAction({id}))
     .then(unwrapResult)
     .then((res) => {
      toastSuccess(res.message);
      fetchCategory();
     })
     .catch((err) => {
      console.log(err.message);
      toastError(err.message)
     })
     .finally(() => loading?.hide());
   };
   useEffect(() => {
    fetchCategory();
   }, []);
  return (
    <CategoryContext.Provider
    key={3}
     value={{
      fetchCategory,
      addCategory,
      updateCategory,
      deleteCategory,
     }}>
     {children}
    </CategoryContext.Provider>
   );
 
}
