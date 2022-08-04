import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, Button, InputNumber, Table, Tag } from "antd";
import Item from "antd/lib/list/Item";
import React from "react";
import { useSelector } from "react-redux";

import InputNumberWait from "../../../components/InputNumberWait/InputNumberWait";
import { useCart } from "../../../hook/useCart";
import { formatMoney } from "../../../utils/common";

export default function CartList() {

 const { removeCart,updateQuantity } = useCart();
 const {cartItem } = useSelector(state=>state.cart.preview);

 const {user}  = useSelector(state=>state.auth);
 const columns = [
  {
   title: "Hình ảnh",
   dataIndex: "product",
   width: "10%",
   render: (text, product) =>{

      let images = JSON.parse(product.product.image);
     return  <Avatar src={images[1]} size="large" />
   }
  },
  {
   title: "Tên sản phẩm",
   dataIndex: "product",
   key: "product",
   width: "15%",
   render: (product) => <>{product.name}</>,
    // ...(getColumnSearchProps("name") ),
  },
  {
   title: "Size",
   dataIndex: "product",
   key: "product",
   width: "10%",
   render: (product) => <>{product.size}</>,
  },
  {
   title: "Đơn giá",
   dataIndex: "product",
   key: "product",
   width: "10%",
   render: (product) => (
    <Tag color={"green"}>{product.price && formatMoney(product.price)}</Tag>
   ),
  },
  {
   title: "Số lượng",
   dataIndex: "qty",
   key: "qty",
   width: "10%",
   render: (text, record) => {
   
    return <InputNumberWait
       data={record?.prod_qty|| 0}
       fn={(value) => {
        updateQuantity({
          id:user?.id ,
          prod_id:record.id,
          prod_qty:value
        });
       }}
      />
   
   },
  },
  
  {
   title: "Thao tác",
   dataIndex: "product",
   key: "product",
   width: "10%",
   render: ( product) => {
    return  <Button
    icon={<DeleteOutlined />}
    onClick={() => removeCart({
     id:user?.id ||undefined ,
     prod_id:product.id
   })}
   />
   }
  },
 ];

 return (
  <div style={{ width: "100%", overflow: "auto" }}>
   <Table
    bordered
    dataSource={cartItem || []}
    columns={columns}
    pagination={false}
   />
  </div>
 );
}
