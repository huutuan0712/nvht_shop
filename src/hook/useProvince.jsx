import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProvinceAction, getDistrictAction, getWardAction } from '../features/checkout/checkout.action';
import { useLoading } from './useLoading'

export default function useProvince() {
    const loading = useLoading();
    const [city , setCity] = useState([]);
    const [district , setDistrict] = useState([]);
    const [ward , setWard] = useState([]);
    const dispatch = useDispatch();
    const fetchProvince = (data)=>{
        loading?.show()
        dispatch(fetchProvinceAction(data))
        .then(unwrapResult)
        .then(res =>{
            setCity(res)
        })
        .catch(err=>{
            console.log(err);
        }).finally(()=>loading?.hide())
    }
    const onChangeCity = (id)=>{
        loading?.show()
        dispatch(getDistrictAction(id))
        .then(unwrapResult)
        .then(res =>{
            setDistrict(res)
        })
        .catch(err =>{
            console.log(err);
        }).finally(()=>loading?.hide())
    }
    const onChangeWard= (id)=>{
        loading?.show();
        dispatch(getWardAction(id))
        .then(unwrapResult)
        .then(res=>{
            setWard(res)
        }).catch(err=>{
            console.log(err);
        }).finally(()=>loading?.hide())
    }
    useEffect(()=>{
        fetchProvince()
      
     },[])
  return {fetchProvince,city,onChangeCity,ward,onChangeWard,district}
}
