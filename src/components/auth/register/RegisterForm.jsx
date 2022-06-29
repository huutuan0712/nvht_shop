import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../../textfield/TextField';
import * as Yup from 'yup';
import useRegister from './useRegister';
import { Link, Navigate } from 'react-router-dom';
import { Result } from 'antd';


export default function RegisterForm() {
  const {isSuccess,register} =useRegister()

  const validate = Yup.object({
    name: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  if(isSuccess){
    <Result
     status={"success"}
     title="Thành công"
     subTitle="Đăng ký thành công. Hãy check mail để xác nhận tài khoản"
    />
    return <Navigate to='/login' />
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        register(values)
      }}
    >
      {formik => (
        <div className="w-full max-w-2xl p-3 flex justify-center items-center h-screen m-auto">
          <Form  className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="my-4 font-weight-bold text-xl display-4 text-blue-600 overflow-hidden">Sign Up</h1>
            <TextField label="Name" name="name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="password_confirmation" type="password" />
            <div className="flex justify-between items-center">
              <button className="btn btn-dark mt-3" type="submit">Register</button>
              <Link to="/login" className='link link-primary '>Login</Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}