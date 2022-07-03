import React from 'react'
import {useDispatch} from 'react-redux'
 import { logOutAction } from "../../features/auth/auth.action";
import { unwrapResult } from "@reduxjs/toolkit";
import {useNavigate} from 'react-router-dom'
import { setLogOut } from '../../features/auth/auth.slice';

export default function useLogOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const fetchLogOut = () => {
     dispatch(logOutAction())
      .then(unwrapResult)
      .then((res) => logOutSuccess(res))
      .catch((err) => console.log(err.message))
     
    };
    const logOutSuccess = () => {
     dispatch(setLogOut());
     navigate("/login");
    };
    return {fetchLogOut}
}