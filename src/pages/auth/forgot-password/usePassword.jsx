import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { forgotPassWordAction, updatePassWordAction } from '../../../features/auth/auth.action';
import { useLoading } from '../../../hook/useLoading'
import { toastError, toastSuccess } from '../../../utils/toast';

export default function usePassword() {
    const loading = useLoading();
    const dispatch = useDispatch();
    const [successForgotPassword, setSuccessForgotPasswrod] = useState(false);
    const [successUpdatePassword, setSuccessUpdatePasswrod] = useState(false);
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const forgotPassword = (email)=>{
        loading?.show();
        dispatch(forgotPassWordAction(email))
        .then(unwrapResult)
        .then(res=>{
            console.log(res);
            setSuccessForgotPasswrod(true)
            toastSuccess(res.message)
        })
        .catch(err=>{
            console.log(err);
            toastError(err.message)
        })
        .finally(()=>loading?.hide())
    }
    const changePassword = (data)=>{
        loading?.show();
        dispatch(updatePassWordAction({...data,token}))
        .then(unwrapResult)
        .then(res=>{
            console.log(res);
            setSuccessUpdatePasswrod(true)
            toastSuccess(res.message)
        })
        .catch(err=>{
            console.log(err);
            toastError(err.message)
        })
        .finally(()=>loading?.hide())
    }
  return {forgotPassword,changePassword,successForgotPassword,successUpdatePassword}
   
  
}
