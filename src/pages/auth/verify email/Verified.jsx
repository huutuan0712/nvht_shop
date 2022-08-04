import { Button, Result } from 'antd';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useVerify from './useVerify';
import "./Verified.scss"
export default function Verified() {
    const navigate = useNavigate();
    const {error,verified} = useVerify();
    useEffect(() => {
     verified()
    }, [])
    
    if(error){
        <Result
            status="error"
            title="Thất bại "
            subTitle={error}
            extra={[
            <Button type="primary" onClick={()=>navigate("/login")} >
            Đăng nhập
            </Button>,
            ]}
        />
    }
  return (
   <div className="verified">
        <Result
            status="success"
            title="Đăng ký thành công"
            subTitle="You email successfully verified"
            extra={[
            <Button type="primary" onClick={()=>navigate("/login")} >
            Đăng nhập
            </Button>,
            ]}
        />
   </div>
  )
}
