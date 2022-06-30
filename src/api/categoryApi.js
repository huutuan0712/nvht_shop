import axiosClient from './axiosClient'
import API_ENPOINT from './apiEnpoint';
const categorys = {
    getCategory: ()=> {
      return axiosClient.get(API_ENPOINT.CATEGORY.GET);
    },
    addCategory:(body)=>{
      return axiosClient.post(API_ENPOINT.CATEGORY.CREATE,body)
    },
    updateCategory:(id,body)=>{
      return axiosClient.post(`${API_ENPOINT.CATEGORY.UPDATE}/${id}`,body)
    }
  }
  
  export default categorys;