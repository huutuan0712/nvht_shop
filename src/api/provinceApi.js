import axiosClient from './axiosClient'
import API_ENPOINT from './apiEnpoint';

export const getProvince = (body)=> axiosClient.get(API_ENPOINT.PROVINCE.CITY,body);

export const getWard = (id)=> axiosClient.get(`${API_ENPOINT.PROVINCE.WARD}/${id}`);

export const getDistrict = (id)=> axiosClient.get(`${API_ENPOINT.PROVINCE.DISTRICT}/${id}`);

// export const getWard = (body)=> axiosClient.get(API_ENPOINT.PROVINCE.WARD,body);
// export const getStreet = (body)=> axiosClient.get(API_ENPOINT.PROVINCE.STREET,body);