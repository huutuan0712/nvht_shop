import React, { useEffect, useMemo } from "react";
import { Col, Result, Row } from "antd";
import { useParams } from "react-router-dom";
import ProductCard from "../../../components/product-card/ProductCard";
import { useProduct } from "../../../../hook/useProduct";

function ProductCategory() {
 const { productCate, getProduct } = useProduct();

 const { path } = useParams();
 const mapProduct = useMemo(() => {
  if (!productCate.product)
   return (
    <Result
     status={"404"}
     subTitle={"Chưa có sản phẩm cho nhà sản xuất này"}
    />
   );
  return (
   <Row gutter={15}>
    {productCate.product.map((it,idx) => (
     <Col span={4} key={idx}>
      <ProductCard data={it} className={""} />
     </Col>
    ))}
   </Row>
  );
 }, [path, productCate.product]);

 useEffect(() => {
  getProduct(path);
 }, [path]);

 return <div>{mapProduct}</div>;
}

export default ProductCategory;
