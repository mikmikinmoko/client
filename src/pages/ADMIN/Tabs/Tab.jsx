import { Tabs } from "antd";
import Profile from "./Profile/Profile";
import Services from "./Services/Services";

const items = [
  {
    key: "profile",
    label: "Profile",
    children: <Profile />,
  },
  {
    key: "services",
    label: "Services",
    children: <Services />,
  },
];

const Tab = () => {
  return (
    <>
      <Tabs items={items} />
    </>
  );
};

export default Tab;
