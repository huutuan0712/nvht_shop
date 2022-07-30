import { Button, Form, InputNumber, Radio, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useCart } from "../../../../../hook/useCart";

import { formatMoney } from "../../../../../utils/common";
import { useProductDetail } from "../useProductPoster";
import "./Detail.scss";
import useDetail from "./useDetail";

export default function Detail() {
 const { detail } = useProductDetail();
  const {user} = useSelector(state=>state.auth);
 const {
  maxQuantity,
  onChangeSize,
 } = useDetail(detail?.size);
 const {createCart} = useCart();
 const onFinish = (value) =>{
  // addCart({
  //   idProduct:detail?.id,
  //   qty:value.qty
  // });
  createCart({
    user_id:user?.id || undefined,
    idProduct:detail?.id,
    qty:value.qty
  })
 }

 
 return (
  <div className="detail">
   <span className="quantity">{detail?.qty}</span>
   <h1>{detail?.name}</h1>
   <div className="created">
    Created By{" "}
    <span className="nsx ml-1 mr-2">{detail?.name}</span>
    Design By{" "}
    <span className="category ml-1 mr-2">
     {detail?.category?.name}
    </span>
   </div>
   <div className="price">
   <Tag color={"green"}>{detail?.price && formatMoney(detail?.price)}</Tag>
   </div>

   <Form
    onFinish={onFinish}
    initialValues={{
     qty: 1,
    }}
    className={"detail-description"}
    labelCol={{ span: 3 }}>
    <Form.Item label={"Mã sản phẩm"}>{detail?.id}</Form.Item>
    <Form.Item label={"Mô tả"}>{detail?.description}</Form.Item>
    <Form.Item
     label={"Size"}
     name="size"
     rules={[
      { required: true, message: "Phải chọn size trước khi mua" },
     ]}>
     <Radio.Group className="size" onChange={onChangeSize}>
        <Radio.Button  value={detail?.size}>
        {detail?.size}
       </Radio.Button>
     </Radio.Group>
    </Form.Item>
    <Form.Item
     label={"Số lượng"}
     rules={[{required: true, message: "Số lượng không được để trống" }]}
     name="qty">
     <InputNumber
      defaultValue={1}
      min={1}
      max={maxQuantity}
     />
    </Form.Item>
    <Form.Item>
     <button type="submit" className="btn-grad mx-auto">
      Thêm vào giỏ hàng
     </button>
    </Form.Item>
   </Form>
  </div>
 );
}
