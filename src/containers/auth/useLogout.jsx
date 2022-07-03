import React from 'react'
import {useDispatch} from 'react-redux'
 
import { unwrapResult } from "@reduxjs/toolkit";
import {useNavigate} from 'react-router-dom'
import { LogoutAction } from '../../features/auth/auth.action';
import { setLogOut } from '../../features/auth/auth.slice';
export default function useLogout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchLogout =async () =>{
        dispatch(logoutSuccess())
        .then(unwrapResult)
        // .then(res => logoutSuccess(res))
        .catch(error =>{console.log(error.message );})
    };
    const logoutSuccess = (res)=>{
        console.log(res);
        dispatch(setLogOut(res))
       navigate('/login')
      }
  return {fetchLogout}
}