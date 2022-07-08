import axiosClient, { configUpload } from './axiosClient'
import API_ENPOINT from './apiEnpoint';
export const createCart = (body) =>
 axiosClient.post(API_ENPOINT.CART.CREATE, body);
 export const getPreview= (body) =>
 axiosClient.post(API_ENPOINT.CART.GET_CART_PREVIEW, body);
 export const getAllCart = () =>
 axiosClient.get(API_ENPOINT.CART.GET_ALL_CART);