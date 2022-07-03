import {
    ShoppingCartOutlined,
    UploadOutlined,
    UserOutlined,
   } from "@ant-design/icons";
   import {
    Avatar,
    Badge,
    Button,
    Dropdown,
    Input,
    Menu,
    Space,
   } from "antd";
 
//    import Search from "components/search/Search";
   import useLogOut from "../../containers/auth/useLogout";
//    import Information from "containers/information/Information";
   import React, { useState } from "react";
    import { useSelector } from "react-redux";
   import { Link, useNavigate } from "react-router-dom";
   export default function Auth() {
    const navigate = useNavigate();
    const { user, isLogin } = useSelector(state => state.auth );
    // const { preview, carts } = useAppSelector().cart;
    const [openSearch, setOpenSearch] = useState(false);
    const { fetchLogout } = useLogOut();
    // const [showInfomation, setShowInfomation] = useState(false);
    const menuUser = (
     <Menu>
      <Menu.Item
       onClick={() => setShowInfomation(true)}
       key="1"
       icon={<UserOutlined />}>
       Thông tin
      </Menu.Item>
      <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
       <Link to={"/cart/my-cart"}> Đơn hàng</Link>
      </Menu.Item>
      <Menu.Item
       key="3"
       icon={<UploadOutlined />}
       onClick={() => fetchLogout()}>
       Đăng xuất
      </Menu.Item>
     </Menu>
    );
    return (
     <Space className="header-end">
      <Input
       placeholder="Tìm kiếm"
       value={""}
       onClick={() => setOpenSearch(true)}
      />
      <Badge  showZero>
       <Button
        onClick={() => navigate("/cart")}
        icon={<ShoppingCartOutlined />}
       />
      </Badge>
      {isLogin ? (
       <Dropdown overlay={menuUser} placement="bottomRight">
        <Avatar
         size={40}
         src={user?.avatar}
         icon={!user?.avatar ? <UserOutlined /> : null}
        />
       </Dropdown>
      ) : (
       <Button onClick={() => navigate("/login")}>Đăng nhập</Button>
      )}
      {/* <Information
       visible={showInfomation}
       onHide={() => setShowInfomation(false)}
      />
      <Search visible={openSearch} onHide={() => setOpenSearch(false)} /> */}
     </Space>
    );
   }
   
