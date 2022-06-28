import React from "react";
import { Formik, Form } from 'formik';
import { TextField } from '../../textfield/TextField';
import * as Yup from 'yup';
import {useDispatch,useSelector} from 'react-redux'
 import { loginAction } from "../../../features/auth/auth.action";
import { unwrapResult } from "@reduxjs/toolkit";
import { setAuth } from "../../../features/auth/auth.slice";
import {useNavigate,Navigate, Link} from 'react-router-dom'
function LoginForm() {
    const dispatch = useDispatch();
    const {isLogin} = useSelector(state => state.auth)
    // const navigate = useNavigate()
    const loginSuccess = (res)=>{
      dispatch(setAuth(res))
      alert('login success')
    }
    
    const validate = Yup.object({
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    })
 
if(isLogin){

    return <Navigate to='/' />
}
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        // console.log("🚀 ~ file: LoginForm.jsx ~ line 41 ~ LoginForm ~ dispatch(loginAction(values))", dispatch(loginAction(values)))
        dispatch(loginAction(values))
        
        .then(unwrapResult)
        .then(res => loginSuccess(res))
        .catch(error =>{console.log(error.message );})

      }}
      
    >
      {formik => (
        <div className="w-full max-w-2xl p-3 flex justify-center items-center h-screen m-auto">
          <Form  className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="my-4 font-weight-bold text-xl display-4 text-blue-600 overflow-hidden">Sign In</h1>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <div className="flex justify-between items-center">
              <button className="btn btn-dark mt-3" type="submit">Login</button>
              <Link to="/register" className='link link-primary '>Register</Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;
