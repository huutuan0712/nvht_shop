import React from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";;
import { createCategoryAction, deleteCategoryAction, getCategoryAction, updateCategoryAction } from "../features/category/category.action";
import { setCategory } from "../features/category/category.slice";
export default function useCategory() {
  const dispatch = useDispatch();
  
  const fetchCategory =  () => {
    dispatch(getCategoryAction())
      .then(unwrapResult)
      .then((res) => dispatch(setCategory(res)))
      .catch((error) => {
        console.log(error.message);
      });
  };
  const addCategory =  (data) => {
    dispatch(createCategoryAction(data))
      .then(unwrapResult)
      .then((res) => dispatch(setCategory(res)))
      .catch((error) => {
        console.log(error.message);
      });
  };
  const updateCategory = (id, data, file) => {
  
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
      console.log(res.message);
      fetchCategory();
     })
     .catch((error) => {
      console.log(error);
    });
     
   };
   const deleteCategory = (id) => {
    dispatch(deleteCategoryAction({id}))
     .then(unwrapResult)
     .then((res) => {
      console.log(res.message);
      fetchCategory();
     })
     .catch((err) => {
      console.log(err.message);
     })
   };
  
  return { fetchCategory ,addCategory,updateCategory,deleteCategory};
}
