import { unwrapResult } from '@reduxjs/toolkit';

import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { verifiedEmailAction } from '../../../features/auth/auth.action';
import { useLoading } from '../../../hook/useLoading';

export default function useVerify() {
    const dispatch = useDispatch();
    const loading = useLoading();
    const [error, setError] = useState()
    const {user} = useSelector(state=>state.auth);
  const verified =()=>{
    loading?.show()
    dispatch(verifiedEmailAction({id:user?.id}))
    .then(unwrapResult)
    .then(res=>{
        console.log(res);
    }).catch(err=>{
        setError(err.message)
    })
    .finally(()=>loading?.hide())
  }
  return{error,verified}
}
