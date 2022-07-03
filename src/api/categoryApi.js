import axiosClient, { configUpload } from './axiosClient'
import API_ENPOINT from './apiEnpoint';

export const  getCategory=() => {
    return axiosClient.get(API_ENPOINT.CATEGORY.GET);
};
export const  createCategory=(body)=>{
    return axiosClient.post(API_ENPOINT.CATEGORY.CREATE,body)
};
export const  updateCategory=(id,data)=>{
      axiosClient.post(`${API_ENPOINT.CATEGORY.UPDATE}/${id}`, data,{...configUpload})
};
  
export const deleteCategory = (params) =>
 axiosClient.delete(`${API_ENPOINT.CATEGORY.UPDATE}/${params.id}`);
