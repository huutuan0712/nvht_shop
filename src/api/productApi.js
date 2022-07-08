import axiosClient, { configUpload } from './axiosClient'
import API_ENPOINT from './apiEnpoint';

export const  getProduct=() => {
    return axiosClient.get(API_ENPOINT.PRODUCT.GET);
};
export const  createProduct=(body)=>{
    return axiosClient.post(API_ENPOINT.PRODUCT.CREATE,body)
};
export const  updateProduct=(id,data)=>{
      axiosClient.post(`${API_ENPOINT.PRODUCT.UPDATE}/${id}`, data,{...configUpload})
};

export const getProductDetail = (id) =>
 axiosClient.get(`${API_ENPOINT.PRODUCT.GET_DETAIL}/${id}`);
export const deleteProduct = (params) =>
 axiosClient.delete(`${API_ENPOINT.PRODUCT.UPDATE}/${params.id}`);

 export const getProductByCategory = (path) =>
 axiosClient.get(`${API_ENPOINT.PRODUCT.GET_PRODUCT_CATE}/${path}`);