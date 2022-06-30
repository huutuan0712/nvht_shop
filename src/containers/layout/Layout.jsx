import { Layout } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from "./logo.png";
import MenuUser from "../../containers/auth/MenuUser"
import MenuAdmin from "../../containers/auth/MenuAdmin"
import Auth from '../auth/Auth';
import './Layout.scss'
import ROLE from '../../features/auth/auth.model'
export default function DefaultLayout({children}) {
    const { Header, Sider, Content } = Layout;
    const navigate = useNavigate();
    const {user} = useSelector(state => state.auth)
  return (
    <Layout style={{ minHeight: "100vh" }}>
   <Sider
    trigger={null}
    style={{
     overflow: "auto",
     height: "100vh",
     position: "fixed",
     left: 0,
     top: 0,
     bottom: 0,
    }}>
    <div className={"logo"} onClick={() => navigate("/")}>
     <img src={logo} alt="" />
    </div>
    {user && user?.role === 1 ? (
     <MenuAdmin />
    ) : (
     <MenuUser />
    )}
   </Sider>
   <Layout className="site-layout" style={{ marginLeft: 200 }}>
    <Header className="site-layout-background header">
     <div className="header-start">
      <h3>Hello {user?.name}, have a nice day</h3>
     </div>
     <div className="header-center"></div>
     <Auth />
    </Header>
    <Content
     className="site-layout-background"
     style={{
      margin: "24px 16px",
      padding: 24,
     }}>
     {children}
    </Content>
   </Layout>
  </Layout>
  )
}
