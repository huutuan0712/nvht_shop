import { HeartOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Space, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formatMoney } from "../../../utils/common";

import "./ProductCard.scss";

export default function ProductCard({ data, className }) {
 const navigate = useNavigate();
 const { Text, Link } = Typography;
 let images = JSON.parse(data.image);
 return (
  <Card
   className={classNames("product-card", className)}
   hoverable
   cover={
    <img
     onClick={() => navigate(`/product/detail/${data?.id}`)}
     src={images[0]}
    />
   }>
   <Meta title={data?.name} />
 
   <Meta
    title={
     <Space className="">
      {data.discount > 0 ? (
       <>
        <Text delete>{formatMoney(data?.price)}</Text>
       </>
      ) : (
       formatMoney(data?.price)
      )}
     </Space>
    }
    // description={data?.note.substring(0, 50)}
   />
  </Card>
 );
}
