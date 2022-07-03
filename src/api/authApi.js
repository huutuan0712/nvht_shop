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