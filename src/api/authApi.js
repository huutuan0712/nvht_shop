import axiosClient from './axiosClient'
import API_ENPOINT from './apiEnpoint';
const authApi = {
    login: (body) => {
      return axiosClient.post(API_ENPOINT.AUTH.LOGIN, body);
    },
    register:(body)=>{
      return axiosClient.post(API_ENPOINT.AUTH.REGISTER,body)
    }
    // getProfile : (body) => {
    //   const response = await axiosClient.get(API_ENPOINT.auth.PROFILE, body);
    //   return response.data;
    // }
  }
  
  export default authApi;