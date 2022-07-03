
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./Category.scss";
import { useNavigate } from "react-router-dom";
import { Col, Row, Typography } from "antd";

export default function HomeCategory() {
 const {category} = useSelector((state) => state.category.categories);
 const navigate = useNavigate();

 const mapCatgegories = useMemo(() => {
  return category?.map((it) => (
   <Col
    xl={6}
    sm={12}
    xs={24}
    className="category-btn"
    key={Math.random()}
    onClick={() => navigate(`/product/category/${it.slug}`)}>
    <div className="content">
     <img src={it.image} alt="" />
     <div className="">
      <h3>{it.name}</h3>
      <span>Best choice</span>
     </div>
    </div>
   </Col>
  ));
 }, [category]);

 return (
  <div className="home-category">
   <Typography.Title>Danh mục sản phẩm</Typography.Title>
   <Row gutter={[5, 5]} className="category">
    {mapCatgegories}
   </Row>
  </div>
 );
}
