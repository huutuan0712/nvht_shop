
import { Tabs } from "antd";

import React from "react";
import Category from "./category/Category";
import Product from "./product/Product";

export default function ProductWrapper() {
 return (
  <Tabs defaultActiveKey="1">
   <Tabs.TabPane tab="Sản phẩm" key={1}>
    <Product />
   </Tabs.TabPane>
   <Tabs.TabPane tab="Danh mục" key={2}>
    <Category />
   </Tabs.TabPane>
  </Tabs>
 );
}
