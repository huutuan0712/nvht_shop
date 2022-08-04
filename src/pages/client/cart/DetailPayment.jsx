
import { Button } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hook/useCart";
import { formatMoney } from "../../../utils/common";

import "./DetailPayment.scss";
export default function DetailPayment() {
    const navigate = useNavigate();
    const {total,getCartTotal,} = useCart();
  ;
   useEffect(()=>{
    getCartTotal()
   },[])
    
    return (
      <>
        <table className="detail-payment-table">
        <tr>
         <th>Tổng thanh toán</th>
         <td>{formatMoney(total || 0)}</td>
        </tr>
        <tr>
        <th>Giảm giá:</th>
        <td>{formatMoney( 0)}</td>
        </tr>
       <tr>
        <th></th>
        <td><Button type="primary" onClick={()=>navigate("/checkout")}>Thanh Toán</Button></td>
       </tr>
       </table>
      
      </>
     )
    
}
