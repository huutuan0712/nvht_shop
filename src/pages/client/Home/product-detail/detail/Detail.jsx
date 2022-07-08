
import { Button, Form, InputNumber, Radio } from "antd";
// import { useCart } from "hook/useCart";
// import { createRule } from "pages/client/cart/Payment";


import React from "react";
import { formatMoney } from "../../../../../utils/common";
import { useProductDetail } from "../useProductPoster";
import "./Detail.scss";
import useDetail from "./useDetail";

export default function Detail() {
 const { detail } = useProductDetail();
 const {
  maxQuantity,
  onChangeSize,
 } = useDetail(detail?.size);
//  const { addCart } = useCart();
 const onFinish = (value) =>
  addCart({
   idProduct: detail?.id,
   size: value.size,
   qty: value.qty,
  });

 return (
  <div className="detail">
   {/* <span className="quantity">{maxQuantity}</span> */}
   <h1>{detail?.name}</h1>
   <div className="created">
    Created By{" "}
    {/* <span className="nsx ml-1 mr-2">{detail?.nsx?.name}</span> */}
    Design By{" "}
    <span className="category ml-1 mr-2">
     {detail?.category?.name}
    </span>
   </div>
   <div className="price">
    {detail?.price }
   </div>
   {/* {detail?.discount > 0 && (
    <div className="discount">
     Giảm {formatMoney(detail?.discount)} (
     {formatMoney(detail?.price)})
    </div>
   )} */}

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
      {/* {detail?.size?.map((it) => (
       <Radio.Button key={it.id} value={it.size}>
        {it?.size}
       </Radio.Button>
      ))} */}
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
