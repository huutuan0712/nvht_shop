import { Col, Row, Space, Typography } from "antd";
// import  useProduct  from "../../../../hook/useProduct";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../components/product-card/ProductCard";
export default function ProductListing() {
//  const { products } = useProduct();
    const products = useSelector(state =>state.product.Products.product);
   
 const mapProduct = useMemo(() => {
  return products?.map((it) => (
   <Col
    key={Math.random()}
    xxl={{ span: 3 }}
    xl={{ span: 4 }}
    sm={{ span: 8 }}
    xs={{ span: 24 }}>
    <ProductCard className="product-card" data={it} />
   </Col>
  ));
 }, [products]);

 return (
  <Space className="product mt-3" direction="vertical">
   <Typography.Title className="product-title">
    Danh sách sản phẩm
   </Typography.Title>
   <Row gutter={[5, 5]}>{mapProduct}</Row>
  </Space>
 );
}
