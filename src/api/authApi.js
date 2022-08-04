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
  export const  verifiedEmail=(params)=>{
    return axiosClient.get(`${API_ENPOINT.AUTH.VERIFIED_EMAIL}/${params.id}`)
  };
  export const updatePassword=(body)=>{
    return axiosClient.post(API_ENPOINT.AUTH.UPDATE_PASSWORD,body)
  };
  export const forgotPassword=(body)=>{
    return axiosClient.post(API_ENPOINT.AUTH.FORGOT_PASSWORD,body)
  };