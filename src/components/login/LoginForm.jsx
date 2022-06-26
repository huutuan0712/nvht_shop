import React from "react";
import { useFormik } from "formik";
import {useDispatch,useSelector} from 'react-redux'
import { loginAction } from "../../features/auth/auth.action";
import { unwrapResult } from "@reduxjs/toolkit";
import { setAuth } from "../../features/auth/auth.slice";
import {useNavigate,Navigate} from 'react-router-dom'
function LoginForm() {
    const dispatch = useDispatch();
    const {isLogin} = useSelector(state => state.auth)
    const navigate = useNavigate()
    console.log(isLogin);
    // useEffect(() => {
    //   if(isLogin){
    //     navigate('/home')
    //   }
    // }, [isLogin])
    
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginAction(values))
      
    //   .then(unwrapResult)
    // //   .then(res => loginSuccess(res))
    // //   .catch(error =>{console.log(error);})
      
    },
  });

//   const loginSuccess = (res)=>{
//     console.log(res);
//     dispatch(setAuth(res))

//     alert('login success')
//   }
if(isLogin){

    return <Navigate to='/home' />
}
  return (
    <div className="w-full max-w-xs flex justify-center items-center h-full">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Pasword"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
