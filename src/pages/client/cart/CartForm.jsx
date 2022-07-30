import { Col, Row, Typography } from "antd";

import React from "react";
import DetailPayment from "./DetailPayment";
import Payment from "./Payment";

export default function CartForm() {
 return (
  <div className="cart-form">
   <Typography.Title>Thông tin đặt hàng</Typography.Title>
   <Row>
    <Col lg={12} xs={24}>
     <DetailPayment />
    </Col>
    <Col lg={12} xs={24}>
     <Payment />
    </Col>
   </Row>
  </div>
 );
}
