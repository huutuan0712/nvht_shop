import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { registerAction } from '../../../features/auth/auth.action';
import { unwrapResult } from "@reduxjs/toolkit";
import { setUser } from '../../../features/auth/auth.slice';
import { toastError, toastSuccess } from '../../../utils/toast';
import { useLoading } from '../../../hook/useLoading';


export default function useRegister() {
    const [isSuccess, setIsSuccess] = useState(false);
    // const {user} = useSelector(state=>state.auth)
    const loading = useLoading();
    const dispatch = useDispatch();
    const register = (data)=>{
        loading?.show();
        dispatch(registerAction(data))
        .then(unwrapResult)
        .then(res =>{
            dispatch(setUser(res))
            toastSuccess('Register Success')
            setIsSuccess(true) 
        })
        .catch(error =>{
            loading?.hide()
            toastError(error.message)
            })
        .finally(()=>loading?.hide());
    }
  return {isSuccess,register}
}
