import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Button, Form, Image, Input, Result, Select, Tabs } from "antd";
import LogoMomo from '../../../assets/img/logo_momo.png'
import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartStatus } from "../../../features/cart/cart.model";
import { useCart } from "../../../hook/useCart";
import "./Payment.scss";
import useProvince from "../../../hook/useProvince";
export const createRule = (name) => ({
 required: true,
 message: `${name} không được để trống!`,
});
export default function Payment() {
 const { preview, carts } = useSelector(state=>state.cart);
 const [form] = Form.useForm();
 const { paidWithoutPaypal,total ,url} =useCart();
 let total_price = Math.round(total/23000,2);
const {city,ward,district,onChangeWard,onChangeCity} = useProvince();
 const { TabPane } = Tabs;
 const { isLogin ,user} = useSelector(state=>state.auth);
 const navigate = useNavigate();
 const onFinish = useCallback(() => {
  form.validateFields().then((value) => {
   const data = {
    user_id:user?.id,
    address: value.address,
    tinh:value.city,
    huyen:value.district,
    xa:value.ward,
    name: value.name,
    phone: value.phone,
   }
 paidWithoutPaypal(data);
  });
 }, [form]);

 if (!isLogin) {
  return (
   <Result
    status="warning"
    title="Bạn chưa đăng nhập"
    subTitle="Hãy đăng nhập để tiến hành đặt hàng"
    extra={[
     <Button
      onClick={() => navigate("/")}
      type="primary"
      key="console">
      Tiếp tục mua hàng tôi
     </Button>,
     <Button onClick={() => navigate("/login")} key="buy">
      Đăng nhập
     </Button>,
    ]}
   />
  );
 }
 if (preview?.isDisabled)
  return (
   <Result
    status={"403"}
    title="Rất xin lỗi quý khách đã có mặt hàng không đủ số lượng!"
    subTitle="Hãy xoá mặt hàng không đủ số lượng khỏi giỏ hàng để thanh toán"
   />
  );

 return (
  <div>
   <Tabs type="card">
    <TabPane tab=" Thanh toán Online" key="1">
    <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total_price,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                    console.log("🚀 ~ file: Payment.jsx ~ line 87 ~ returnactions.order.capture ~ details", details)
                    const data = {
                        user_id:user?.id,
                        address:  details.payer.address.address_line_1,
                        tinh:details.payer.address.country_code,
                        huyen:details.payer.address.admin_area_1,
                        xa:details.payer.address.admin_area_2,
                        name: details.payer.name.given_name,
                        phone:details.payer.phone.phone_number.national_number,
                        status:CartStatus.DONE
                       };
                     paidWithoutPaypal(data);
                       
                    });
                }}
            />
        </PayPalScriptProvider>
    </TabPane>
    <TabPane tab="Thanh toán bằng Momo " key="3">
    <a href={url}><img src={LogoMomo}  className="momo" /></a>
    </TabPane>
    <TabPane tab="Thanh toán khi nhận hàng" key="2">
     <Form
      form={form}
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}>
      <Form.Item
       label="Tên người nhận"
       name="name"
       rules={[createRule("Tên")]}>
       <Input />
      </Form.Item>
      <Form.Item
       label="Số điện thoại"
       name="phone"
       rules={[createRule("Số điện thoại")]}>
       <Input />
      </Form.Item>
      <Form.Item
       label="Tỉnh/Thành phố"
       name="city"
       rules={[createRule("Tỉnh")]}>
        <Select
        loading={!city.length}
        disabled={!city.length}
        onChange={onChangeCity}
        >
        {city?.map((it,idx) => {
         return (
            <Select.Option key={idx.id}  value={it.id}>
            {it._name}
           </Select.Option>
         );
        })}
       </Select>
      </Form.Item>
      <Form.Item
       label="Huyện/Quận"
       name="district"
       rules={[createRule("Huyện")]}>
         <Select
        loading={!district.length}
        disabled={!district.length}
        onChange={onChangeWard}
        >
        {district?.map((it,idx) => {
         return (
          <Select.Option key={idx.id}  value={it.id}>
           {`${it._prefix} ${it._name}`}
          </Select.Option>
         
         );
        })}
       </Select>
      </Form.Item>
      <Form.Item 
      label="Xã/Phường" 
      name="ward" 
      rules={[createRule("Xã")]}>
        <Select 
        disabled={!ward.length}
        >
        {ward?.map((it,idx) => {
         return (
            <Select.Option key={idx.id}  value={it.id}>
            {`${it._prefix} ${it._name}`}
           </Select.Option>
         );
        })}
       </Select>
      </Form.Item>
      <Form.Item
       label="Địa chỉ cụ thể"
       name="address"
       rules={[createRule("Địa chỉ")]}>
       <Input />
      </Form.Item>
      <Form.Item label="Thanh toán">
       <Button onClick={() => onFinish()}>Đặt hàng</Button>
      </Form.Item>
     </Form>
    </TabPane>
   </Tabs>
  </div>
 );
}
