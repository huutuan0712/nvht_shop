import axiosClient, { configUpload } from './axiosClient'
import API_ENPOINT from './apiEnpoint';
export const createCart = (body) =>
 axiosClient.post(API_ENPOINT.CART.CREATE, body);
 export const getPreview= (params) =>
 axiosClient.get(`${API_ENPOINT.CART.GET_CART_PREVIEW}/${params.id}`);
//  export const getAllCart = () =>
//  axiosClient.get(API_ENPOINT.CART.GET_ALL_CART);

 export const getCartUser= (params) =>
 axiosClient.get(`${API_ENPOINT.CART.GET_CART}/${params.id}`);

 export const getCartTotal= (params) =>
 axiosClient.get(`${API_ENPOINT.CART.GET_TOTAL_CART}/${params.id}`);

 export const deleteCart = (body) =>
 axiosClient.post(API_ENPOINT.CART.DELETE, body);
 
 export const updateCart = (body) =>
 axiosClient.post(API_ENPOINT.CART.UPDATE, body);

 export const  getAllCart=(body) => {
    return axiosClient.get(API_ENPOINT.CART.GET_ALL_CART,body);
};

 export const payWithPayment = (body) =>
 axiosClient.post(API_ENPOINT.CART.PLACE_ORDER, body);

 export const payWithPaymentMoMo = (params) =>
 axiosClient.post(`${API_ENPOINT.CART.PAYMENT_MOMO}/${params.id}`);

 export const changeStatus = (body) =>
 axiosClient.post(API_ENPOINT.CART.CHANGE_CART_ADMIN, body);

 export const myOrder = (body) =>
 axiosClient.post(API_ENPOINT.CART.MY_ORDER, body);
