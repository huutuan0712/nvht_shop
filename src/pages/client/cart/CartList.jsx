import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, Button, InputNumber, Table, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import InputNumberWait from "../../../components/InputNumberWait/InputNumberWait";
import { useCart } from "../../../hook/useCart";
import { formatMoney } from "../../../utils/common";

export default function CartList() {

 const { removeCart, updateQuantity } = useCart();
 const { preview } = useSelector();

 const columns = [
  {
   title: "Hình ảnh",
   dataIndex: "poster",
   width: "10%",
   render: (text, record) => (
    <Avatar src={record?.posters?.[0].url} size="large" />
   ),
  },
  {
   title: "Tên sản phẩm",
   dataIndex: "name",
   key: "name",
   width: "15%",
   ...(getColumnSearchProps("name") ),
  },
  {
   title: "Size",
   dataIndex: "size",
   key: "size",
   width: "10%",
   render: (text) => <>{text}</>,
  },
  {
   title: "Đơn giá",
   dataIndex: "price",
   key: "price",
   width: "10%",
   render: (price) => (
    <Tag color={"green"}>{price && formatMoney(price)}</Tag>
   ),
  },
  {
   title: "Số lượng",
   dataIndex: "quantity",
   key: "quantity",
   width: "10%",
   render: (text, record) => {
    return record.maxSize !== 0 ? (
     <InputNumberWait
      addonAfter="Đôi"
      max={record.maxSize}
      data={record?.qty || 0}
      fn={(value) => {
       updateQuantity(record.idProduct, record.size, value);
      }}
     />
    ) : (
     <>Đã hết hàng</>
    );
   },
  },
  {
   title: "Tổng tiền",
   dataIndex: "cost",
   key: "cost",
   width: "10%",
   render: (cost) => (
    <Tag color={"green"}>{cost && formatMoney(cost)}</Tag>
   ),
  },
  {
   title: "Thao tác",
   width: "10%",
   render: (text, record) => (
    <Button
     icon={<DeleteOutlined />}
     onClick={() => removeCart(record.idProduct, record.size)}
    />
   ),
  },
 ];

 return (
  <div style={{ width: "100%", overflow: "auto" }}>
   <Table
    bordered
    dataSource={preview?.list || []}
    columns={columns}
    pagination={false}
    rowKey={(record) => Math.random()}
   />
  </div>
 );
}
