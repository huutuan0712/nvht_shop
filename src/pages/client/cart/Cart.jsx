import { Button, Result, Typography } from "antd";

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";
import CartList from "./CartList";

export default function Cart() {
 const { carts, voucher } = useSelector(state=>state.cart);
 const navigate = useNavigate();

 if (!carts || !carts.length)
  return (
   <Result
    status="404"
    subTitle="Giỏ hàng hiện tại của bạn đang trống"
    extra={
     <Button onClick={() => navigate("/")} type="primary">
      Tiếp tục mua hàng
     </Button>
    }
   />
  );
 return (
  <div>
   <Typography.Title>Giỏ hàng của bạn</Typography.Title>
   <CartList />
   <CartForm />
  </div>
 );
}
