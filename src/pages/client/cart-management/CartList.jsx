import React from "react";
import {
 Avatar,
 Button,
 Card,
 Descriptions,
 Form,
 Steps,
 Table,
 Tag,
 Typography,
} from "antd";


import {
 CheckOutlined,
 CloseOutlined,
 DeliveredProcedureOutlined,
 EditOutlined,
 SolutionOutlined,
} from "@ant-design/icons";
// import CreateComment from "pages/client/product-detail/comment/CreateComment";

// import { CartStatus } from "../../../features/cart/cart.model";
import { formatMoney,formatDate,getStatus } from "../../../utils/common";
import { useCart } from "../../../hook/useCart";
import { useLoading } from "../../../hook/useLoading";
import { CartStatus } from "../../../features/cart/cart.model";

function CartList( {mycart} ) {
    let order = mycart.myOrder;


 const { Step } = Steps;
 const { step2, step3, step4, step1, step5 } = getStatus(
  mycart.status
 );

 const columns = [
  {
   title: "Hình ảnh",
   dataIndex: "image",
   key: "image",
   render: (record) => {
  
        let images = JSON.parse(record);
      return  <Avatar src={images[1]} size="large" />
     
   },
  },
  {
   title: "Tên sản phẩm",
   dataIndex: "name",
   key: "name",
   render: (record) => <div>{record}</div>,
  },
  {
   title: "Size",
   dataIndex: "size",
   key: "size",
   render: (record) => {
    return <>{record}</>;
   },
  },
  {
   title: "Đơn giá",
   dataIndex: "price",
   key: "price",
   render: (record) => {
    return <>{record}</>;
   },
  },
//   {
//    title: "Số lượng",
//    dataIndex: "it.qty",
//    key: "it.qty",
//    render: (record) => {
//     return <>{record}</>;
//    },
//   },
 ];
 const loading = useLoading();
 const { changeStatusAdmin } = useCart();
 return (
    <Card className={"my-5"} bordered>
    <Form labelCol={{ span: 2 }} wrapperCol={{ span: 20, offset: 1 }}>
     <h1 className={"text-center"}>#Mã đơn hàng: {mycart.id}</h1>
     <Form.Item label={"Trạng thái"}>
      <Steps>
       <Step status={step5} title="Huỷ" icon={<CloseOutlined />} />
       <Step status={step1} title="Tạo" icon={<EditOutlined />} />
       <Step
        status={step2}
        title="Xác nhận"
        icon={<SolutionOutlined />}
       />
       <Step
        status={step3}
        title="Vận chuyển"
        icon={<DeliveredProcedureOutlined />}
       />
       <Step
        status={step4}
        title="Thành công"
        icon={<CheckOutlined />}
       />
      </Steps>
     </Form.Item>
     <Form.Item label={"Thông tin"}>
      <Descriptions bordered layout={"vertical"} size={"small"}>
       <Descriptions.Item label={"Ngày đặt"}>
        <Typography > {formatDate(mycart.createdAt)}</Typography>
       </Descriptions.Item>
       <Descriptions.Item label={"Số điện thoại"}>
        <Typography>{mycart.phone}</Typography>
       </Descriptions.Item>
       <Descriptions.Item label={"Địa chỉ"}>
        <Typography>{mycart.address}</Typography>
       </Descriptions.Item>
       <Descriptions.Item label={"Ghi chú"}>
        <Typography>{"Giao tận cửa không thì boom"}</Typography>
       </Descriptions.Item>
      </Descriptions>
     </Form.Item>
     <Form.Item label={"Danh sách sản phẩm"}>
      <Table
       size={"small"}
       bordered
       columns={columns}
       dataSource={mycart.order_items.map(it=>it.products)}
       pagination={false}
       rowKey={(record) => Math.random()}
      />
     </Form.Item>
     <Form.Item>
      <Form labelCol={{ span: 20 }}>
    
       <Form.Item label={"Tổng đơn"}>
        <Typography>{formatMoney(mycart.total_price || 0)}</Typography>
       </Form.Item>
       <Form.Item label={"Phải Thanh toán"}>
        <Typography>{formatMoney(mycart.total_price || 0)}</Typography>
       </Form.Item>
       <Form.Item label={"Trạng thái"}>
        <Tag>
         {mycart.status === 2 ? "Đã thanh toán" : "Chưa thanh toán"}
        </Tag>
       </Form.Item>
       {[CartStatus.CREATING].includes(mycart.status) && (
        <Form.Item label={"Thao tác"}>
         <Button
          onClick={() => {
             changeStatusAdmin({
            id: mycart.id,
            status: CartStatus.CANCLE,
           }).finally(() => getMycart());
          }}>
          Huỷ
         </Button>
        </Form.Item>
       )}
      </Form>
     </Form.Item>
    </Form>
    {/* {mycart.status === CartStatus.DONE && !mycart.isCommented && (
     <Card>
      <CreateComment cartId={mycart.id} product={mycart.list} />
     </Card>
    )} */}
   </Card>
    );
 
}

export default CartList;
