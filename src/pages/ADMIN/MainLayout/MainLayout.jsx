/* eslint-disable react/prop-types */
import { Suspense, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import PageLoader from "../../../components/PageLoader";
import { useAuthStore } from "../../../store/auth/useAuthStore";
import { sirmmpc } from "../../../helpers/img";
const { Header, Sider, Content } = Layout;
const Mainlayout = ({ navigations }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { reset } = useAuthStore();
  const location = useLocation();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onBreakpoint={(broken) => {
          if (broken) {
            setCollapsed(true);
          }
        }}
        style={{
          background: colorBgContainer,
        }}
      >
        <div className="p-2 flex items-center gap-2">
          <img src={sirmmpc} style={{ borderRadius: "50%", width: "50px" }} />
          {!collapsed && (
            <span className="text-[18px] font-['Poppins'] w-full">
              Cooperative
            </span>
          )}
        </div>
        <Menu mode="inline" selectedKeys={[location.pathname]} className="py-3">
          {navigations.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu key={item.id} icon={item.icon} title={item.name}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.path} icon={child.icon}>
                      <Link to={`${item.path}/${child.path}`}>
                        {child.name}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.id} icon={item.icon}>
                  <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="flex justify-between items-center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Button ghost type="text" className="mr-10" onClick={reset}>
              Sign Out
            </Button>
          </div>
        </Header>
        <Content
          style={{
            overflow: "hidden",
            margin: "12px 10px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <PageLoader />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Mainlayout;
