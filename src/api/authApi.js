import axiosClient from './axiosClient'
import API_ENPOINT from './apiEnpoint';
const authApi = {
    login: (body) => {
      return axiosClient.post(API_ENPOINT.AUTH.LOGIN, body);
    },
    register:(body)=>{
      return axiosClient.post(API_ENPOINT.AUTH.REGISTER,body)
    },
    logout:(body)=>{
      return axiosClient.post(API_ENPOINT.AUTH.LOGOUT,body)
    }
  }

  export default authApi;

  export const  changePassword=(body)=>{
    return axiosClient.post(API_ENPOINT.AUTH.CHANGE_PASSWORD,body)
  };
  export const  updateInformation=(body)=>{
    return axiosClient.post(API_ENPOINT.AUTH.UPDATE_USER,body)
};