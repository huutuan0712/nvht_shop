import { Avatar, Col, Row, Table, Tag, Typography } from 'antd';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useCart } from '../../../hook/useCart';
import { formatMoney } from '../../../utils/common';
import DetailPayment from '../cart/DetailPayment';
import Payment from './Payment';

export default function Checkout() {
    const {cartItem } = useSelector(state=>state.cart.preview);
    const {total,getCartTotal,} = useCart();
    useEffect(()=>{
     getCartTotal()
    },[])
    const columns =[
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
            title: 'Tên sản phẩm',
            dataIndex: 'product',
            width: "15%",
            render: (product) => <>{product.name}</>,
        },
        {
            title: 'Size',
            dataIndex: 'product',
            width: "10%",
            render: (product) => <>{product.size}</>,
        },
        {
            title: 'Đơn giá',
            dataIndex: 'product',
            width: "10%",
            render: (product) => (
                <Tag color={"green"}>{product.price && formatMoney(product.price)}</Tag>
               ),
        },
        {
            title: 'Số lượng',
            dataIndex: 'prod_qty',
            key:"prod_qty",
            width: "10%",
            render: (text,record) => <>{record.prod_qty}</>,
        },
    ] 
  return (
  <>
    <Typography.Title>Thông tin đặt hàng</Typography.Title>
    <Table
    bordered
    pagination={false}
    columns={columns}
    dataSource={cartItem || []}
    />
    <Typography.Title>Thông tin thanh toán</Typography.Title>
    <Row>
    <Col lg={12} xs={24}>
    <table className="detail-payment-table">
        <tr>
         <th>Tổng thanh toán</th>
         <td>{formatMoney(total || 0)}</td>
        </tr>
    </table>
    </Col>
    <Col lg={12} xs={24}>
     <Payment />
    </Col>
   </Row>
  </>
  )
}
