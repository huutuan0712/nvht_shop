import React from 'react'
import {useDispatch} from 'react-redux'
 import { loginAction } from "../../../features/auth/auth.action";
import { unwrapResult } from "@reduxjs/toolkit";
import { setAuth } from "../../../features/auth/auth.slice";
import {useNavigate} from 'react-router-dom'
import { useLoading } from '../../../hook/useLoading';
import { toastError, toastSuccess } from '../../../utils/toast';
export default function useLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useLoading();
    const fetchLogin = (data) =>{
        loading?.show();
        dispatch(loginAction(data))
        .then(unwrapResult)
        .then(res => {
            loginSuccess(res)
            toastSuccess('Login Success');
        })
        .catch(error =>{
            console.log(error.message );
            toastError(error.message);
        })
        .finally(() => {
            loading?.hide();
        });
    };
    const loginSuccess = (res)=>{
        dispatch(setAuth(res))
       if(res?.user?.role === 1) navigate('/admin')
       else navigate('/')
      }
  return {fetchLogin}
}


