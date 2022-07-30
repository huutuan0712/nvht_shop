
import DefaultLayout from "../../containers/layout/Layout";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export default function ClientRoute() {
 const { isLogin, user } = useSelector(
  (state) => state?.auth
 );
  if(!isLogin){
    return (
      <DefaultLayout>
       <Outlet />
      </DefaultLayout>
     );
  }
  return isLogin && user ? (
   <DefaultLayout>
    <Outlet />
   </DefaultLayout>
  ) : (
   <Navigate to="/login" />
  );

 
}
