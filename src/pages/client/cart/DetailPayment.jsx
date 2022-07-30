
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCart } from "../../../hook/useCart";
import { formatMoney } from "../../../utils/common";

import "./DetailPayment.scss";
export default function DetailPayment() {

    const {total,getCartTotal,} = useCart();


   useEffect(()=>{
    getCartTotal()
   },[])
    
    return (
        <table className="detail-payment-table">
        <tr>
         <th>Tổng thanh toán</th>
         <td>{formatMoney(total || 0)}</td>
        </tr>
       </table>
     )
    
}
