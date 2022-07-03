import { Form, Input, Checkbox, Button, Space } from "antd";
import useLogin from "./useLogin";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
export default function LoginForm() {
 const { fetchLogin } = useLogin();

 return (
  <div className="login">
   <div className="login__content">
    <div className="header">
     <h1>Đăng nhập</h1>
    </div>
    <div className="form">
     <Form name="basic" onFinish={fetchLogin} autoComplete="off">
      <Form.Item
       name="email"
       rules={[
        { required: true, message: "Vui lòng nhập email của bạn" },
        {
         type: "email",
         message: "Email không đúng định dạng!",
        },
       ]}>
       <Input placeholder="Vui lòng nhập email của bạn!" />
      </Form.Item>

      <Form.Item
       name="password"
       rules={[
        {
         required: true,
         message: "Vui lòng nhập mật khẩu của bạn!",
        },
       ]}>
       <Input.Password placeholder="Nhập mật khẩu của bạn" />
      </Form.Item>
      <Form.Item>
       <Button type="primary" block htmlType="submit">
        Đăng nhập
       </Button>
      </Form.Item>
     </Form>
    </div>
    <Space>
     <Link to="/register">Đăng ký</Link>
     <Link to="/forgot-password">Quên mật khẩu</Link>
    </Space>
   </div>
  </div>
 );
}
