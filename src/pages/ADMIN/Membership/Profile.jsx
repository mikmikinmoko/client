import { Tabs } from "antd";
import Services from "./Services";
import Test from "./Test";

const items = [
  {
    key: "services",
    label: "Services",
    children: <Services />,
  },
  {
    key: "test",
    label: "Test",
    children: <Test />,
  },
];

const Profile = () => {
  return <Tabs items={items} animated type="card" />;
};

export default Profile;
