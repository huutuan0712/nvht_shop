import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import DefaultLayout from '../../containers/layout/Layout';

export default function ClientRoute() {
    const { isLogin, user } = useSelector((state) => state?.auth);
   
        return  isLogin && user ? (
            <DefaultLayout>
             <Outlet />
            </DefaultLayout>
           ) : (
            <Navigate to="/login" />
           );
          
          
}

