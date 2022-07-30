import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { registerAction } from '../../../features/auth/auth.action';
import { unwrapResult } from "@reduxjs/toolkit";
import { setUser } from '../../../features/auth/auth.slice';
import { toastError, toastSuccess } from '../../../utils/toast';


export default function useRegister() {
    const [isSuccess, setIsSuccess] = useState(false);
    // const {user} = useSelector(state=>state.auth)
    const dispatch = useDispatch();
    const register = (data)=>{
        dispatch(registerAction(data))
        .then(unwrapResult)
        .then(res =>{
            registerSuccess(res)
            setIsSuccess(true) 
        })
        .catch(error =>toastError(error.message))
    }
    const registerSuccess = (res)=>{
        dispatch(setUser(res))
        toastSuccess('Register Succcess')
    }
  return {isSuccess,register}
}
