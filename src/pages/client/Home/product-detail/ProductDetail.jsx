import { Col, Row } from "antd";
// import Comment from "pages/client/product-detail/comment/Comment";
import React, { useEffect } from "react";
import Detail from "./detail/Detail";
import Poster from "./poster/Poster";
import "./ProductDetail.scss";
import ProductDetailProvider from "./useProductPoster";
export default function ProductDetail() {
 return (
  <ProductDetailProvider className="product-detail">
   <Row gutter={[15, 15]}>
    <Col xl={8} sm={24} className="poster ">
     <Poster/>
    </Col>
    <Col xl={16} xs={24} className="detail col-8">
     <Detail />
    </Col>
   </Row>
   {/* <Comment /> */}
  </ProductDetailProvider>
 );
}
