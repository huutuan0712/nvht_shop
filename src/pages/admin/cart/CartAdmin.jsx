import { Button, Form, Space, Table, Tabs } from "antd";;

import _filter from "lodash/filter";
import React, { useEffect } from "react";
import { CartStatus } from "../../../features/cart/cart.model";
import { useCart } from "../../../hook/useCart";
import { useLoading } from "../../../hook/useLoading";
import { formatDate, formatMoney } from "../../../utils/common";
import "./CartAdmin.scss";
export default function CartAdmin() {
  const {  data ,changeStatusAdmin} = useCart();
 const { TabPane } = Tabs;
 const loading = useLoading();
 const columns= [
  {
   title: "Mã đơn hàng",
  },
  {
   title: "Thông tin người nhận",
   render: (text, record) => {
    return (
     <Form className="" labelCol={{ span: 9 }}>
      <Form.Item label="Người nhận">
       <div className="">{record?.name || ""}</div>
      </Form.Item>
      <Form.Item label="Số điện thoại">
       <div className="">{record.phone}</div>
      </Form.Item>
      <Form.Item label="Địa chỉ">
       <div className="">{record.address + record.xa + record.huyen + record.tinh }</div>
      </Form.Item>
      <Form.Item label="Ngày mua">
       <div className="">{formatDate(record.createdAt)}</div>
      </Form.Item>
     </Form>
    );
   },
  },
  {
   title: "Ghi chú",
   render: () => <>Giao hàng nhanh</>,
  },
  {
   title: "Danh sách mặt hàng",
   dataIndex: "order_items",
   render: (record) => {
    const mapList = record.map((it) => {
     return (
      <div>{`${it?.products?.name}-${it?.products?.size} x ${it.qty}`}</div>
     );
    });
    return <>{mapList}</>;
   },
  },
  {
   title: "Thanh toán",
   dataIndex: "total_price",
   render: (text, record) => (
    <Form labelCol={{ span: 10 }}>
     <Form.Item label="Thanh toán">
      {formatMoney(record.total_price)}
     </Form.Item>
    </Form>
   ),
  },
  {
   title: "Trạng thái",
   dataIndex: "status",
   render: (text, record) => (
    <>{record.status === 2 ?  "Đã thanh toán" : "Chưa thanh toán"}</>
   ),
  },
  {
   title: "Thao tác",
   dataIndex: "status",
   render: (text, record) => {
    return (
     <Space>
      {record.status === CartStatus.CREATING && (
       <Button
        onClick={() => {
         changeStatusAdmin({
          id: record.id,
          status: CartStatus.CONFIRM,
         })
        }}>
        Xác nhận
       </Button>
      )}
      {record.status === CartStatus.CONFIRM && (
       <Button
        onClick={() => {
         changeStatusAdmin({
          id: record.id,
          status: CartStatus.DONE,
         })
        }}>
        Thành công
       </Button>
      )}
      
      {record.status === CartStatus.DONE && <>Giao thành công</>}
      {![
        CartStatus.CONFIRM,
       CartStatus.DONE,
       CartStatus.CANCLE,
      ].includes(record.status) && (
       <Button
        onClick={() => {
        
         changeStatusAdmin({
          id: record.id,
          status: CartStatus.CANCLE,
         })
        }}>
        Huỷ
       </Button>
      )}
     </Space>
    );
   },
  },
 ];
 

 return (
  <div className="cart-admin">
   <Tabs defaultActiveKey="1">
    <TabPane tab="Chờ xác nhận" key="1">
     <Table
      bordered
      columns={columns}
      dataSource={
        _filter(data.order, (n) => n.status === CartStatus.CREATING)
      }
     />
    </TabPane>
    <TabPane tab="Đã xác nhận" key="2">
     <Table
      bordered
      columns={columns}
      dataSource={
        _filter(data.order, (n) => n.status === CartStatus.CONFIRM)
    }
     />
    </TabPane>
    <TabPane tab="Xong" key="3">
     <Table
      bordered
      columns={columns}
      dataSource={_filter(data.order, (n) => n.status === CartStatus.DONE)}
     />
    </TabPane>
    <TabPane tab="Hủy" key="4">
     <Table
      bordered
      columns={columns}
      dataSource={_filter(data.order, (n) => n.status === CartStatus.CANCLE)}
     />
    </TabPane>
   </Tabs>
  </div>
 );
}
