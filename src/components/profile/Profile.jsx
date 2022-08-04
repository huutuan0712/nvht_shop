import {
    Avatar,
    Badge,
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    Modal,
    Row,
    Space,
    Typography,
    Upload,
   } from "antd";
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import useInfomation from "../../containers/infomation/useInformation";
import { formatDate } from "../../utils/common";
import moment from 'moment';

export default function Profile() {
    const { user } = useSelector(state=>state.auth);
    const {updatePassword,updateUser,updateAvatar} = useInfomation()
    const [showPassword, setShowPassword] = useState(false);
    const onFinish = (value) =>
     updatePassword({
      id:user?.id,
      oldPassword:value.oldPassword,
      newPassword:value.newPassword,
      confirmation :value.confirmPassword
     }).then(() => setShowPassword(false));
     const onChangeDate =(date, dateString)=>{
        console.log(date, dateString);
        updateUser({
            birthday: dateString
        },undefined)
     }
  return (
    <>
    <Row>
        <Col lg={12} xs={24}>
        <Typography.Title>Thông tin cá nhân</Typography.Title>
        <Form onFinish={onFinish} labelCol={{ span: 6 }}>
            <Form.Item wrapperCol={{ span: 24 }}>
                <Space
                direction="vertical"
                style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }}>
                <Avatar
                style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                src={user?.avatar}
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                />
                <Upload
                maxCount={1}
                showUploadList={false}
                beforeUpload={true }
                onChange={({file}) => updateAvatar(file)}>
                <a>Thay đổi</a>
                </Upload>
                </Space>
            </Form.Item>
            <Form.Item label="Họ và tên">
                <Typography.Paragraph
                className="mb-0"
                editable={{
                onChange: (text) => {
                    console.log(text);
                updateUser({
                    name: text,
                },undefined);
                },
                }}>
                {user?.name}
                </Typography.Paragraph>
            </Form.Item>
            <Form.Item 
                label="Ngày sinh"
                name="birthday">
               <Space direction="vertical">
               <DatePicker
                onChange={onChangeDate}
                defaultValue={moment(user?.birthday)}
                />
               </Space>
            </Form.Item>
            <Form.Item 
                label="Địa chỉ" 
                name="address">
                <Typography.Paragraph
                className="mb-0"
                editable={{
                    onChange:(text)=>{
                        updateUser({
                            address: text
                        },undefined)
                    }
                }}>
                {user?.address}
                </Typography.Paragraph>
            </Form.Item>
            <Form.Item 
                label="Điện thoại" 
                name="phone" >
                <Typography.Paragraph
                className="mb-0"
                editable={{
                    onChange:(text)=>{
                        updateUser({
                            phone: text
                        },undefined)
                    }
                }}>
                {user?.phone}
                </Typography.Paragraph>
            </Form.Item>
            <Form.Item label="Email">
                <Typography>{user?.email}</Typography>
            </Form.Item>
            <Form.Item label="Trạng thái">
                <Badge
                color={user?.email_verified_at ? "green" : "red"}
                text={user?.email_verified_at ? "Đã xác minh" : "Chưa xác minh"}
                />
            </Form.Item>
            {showPassword && (
                <>
                <Form.Item 
                hasFeedback
                name="oldPassword"
                rules={[ { required: true, message: "Vui lòng nhập mật khẩu cũ" }]}
                label="Mật khẩu cũ">
                <Input.Password />
                </Form.Item>
                <Form.Item
                rules={[ { required: true, message: "Vui lòng nhập mật khẩu mới" }]}
                name="newPassword"
                hasFeedback
                label="Mật khẩu mới">
                <Input.Password />
                </Form.Item>
                <Form.Item
                hasFeedback
                rules={[
                    { required: true, message: "Vui lòng xác nhận mật khẩu " },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                    }
                    return Promise.reject(
                    new Error("Xác nhận mật khẩu không trùng khớp!")
                    );
                    },
                }),
                ]}
                name="confirmPassword"
                label="Xác nhận">
                <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 5 }}>
                <Space>
                <Button onClick={() => setShowPassword(false)}>Huỷ</Button>
                <Button htmlType="submit">Đổi mật khẩu</Button>
                </Space>
                </Form.Item>
                </>
            )}
            {!showPassword && (
                <Form.Item label="Mật khẩu">
                <Button onClick={() => setShowPassword(true)}>
                Đổi mật khẩu
                </Button>
                </Form.Item>
            )}
            </Form>
        </Col>
    </Row>
    </>
  )
}
