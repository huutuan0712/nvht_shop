import React, { useEffect, useMemo } from "react";
import { Result } from "antd";
import CartList from "./CartList";
import { useCart } from "../../../hook/useCart";



function CartManagement() {
    const { Order,getMyOrder } = useCart();
    let orders = Order.myOrder;
    
    useEffect(() => {
        getMyOrder()
    }, [])
    
 const mapCart = useMemo(() => {
  if (!orders)
   return (
    <Result status={"404"} subTitle={"Bạn chưa có đơn hàng nào"} />
   );
  return orders.map((it) => (
    <CartList key={Math.random()} mycart={it} />
   ));
 }, [orders]);

 return <div>{mapCart}</div>;
}

export default CartManagement;
