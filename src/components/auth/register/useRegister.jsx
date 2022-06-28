import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { registerAction } from '../../../features/auth/auth.action';
import { unwrapResult } from "@reduxjs/toolkit";
import { setUser } from '../../../features/auth/auth.slice';


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
        .catch(error =>{console.log(error);})
    }
    const registerSuccess = (res)=>{
        dispatch(setUser(res))
        alert(res.message);
    }
  return {isSuccess,register}
}
