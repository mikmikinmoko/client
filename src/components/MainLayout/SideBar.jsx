import { Layout } from "antd";
import SideHeader from "./SideHeader";
import MenuSider from "./MenuSider";
const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider
      width="17%"
      style={{ backgroundColor: "#ebeced", color: "#242323" }}
      className=" bg-gray-300 text-[30px]"
    >
      <SideHeader />
      <MenuSider />
    </Sider>
  );
};

export default SideBar;
