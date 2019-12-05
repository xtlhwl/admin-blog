import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Icon,Input } from 'antd';
import '../static/css/Pages/adminIndex.css'
import {Route} from 'react-router-dom'
import AddArticle from './addArticle'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Admin() {
  
  const [collapsed,setCollapsed] = useState(false)
  
  const onCollapse = collapsed => {
    // console.log(collapsed);
    setCollapsed(collapsed)
  };
  const { Search } = Input

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>工作台</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="edit" />
              <span>添加文章</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="book" />
                  <span>文章管理</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            
            <Menu.Item key="9">
              <Icon type="message" />
              <span>留言管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
              <Breadcrumb.Item>工作台</Breadcrumb.Item>
            </Breadcrumb>
            
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}><div>
                <Route path="/admin" exact component={AddArticle} />
            </div></div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>admin Design ©2018 Created by Ant Seven</Footer>
        </Layout>
      </Layout>
    );
  
}

export default Admin