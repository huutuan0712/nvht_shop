import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
 import { loginAction } from "../../../features/auth/auth.action";
import { unwrapResult } from "@reduxjs/toolkit";
import { setAuth } from "../../../features/auth/auth.slice";
import {useNavigate} from 'react-router-dom'
export default function useLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector(state => state.auth)
    const fetchLogin = async (data) =>{
        dispatch(loginAction(data))
        .then(unwrapResult)
        .then(res => loginSuccess(res))
        .catch(error =>{console.log(error.message );})
    };
    const loginSuccess = (res)=>{
        dispatch(setAuth(res))
       if(user.role === 1) navigate('/admin')
       else navigate('/')
      }
  return {fetchLogin}
}


