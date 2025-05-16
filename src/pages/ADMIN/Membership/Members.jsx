import { Tabs } from "antd";
import Accepted from "./Tabs/Accepted";
import Pending from "./Tabs/Pending";
import Declined from "./Tabs/Declined";
import { useMembersStore } from "../../../store/admin/useMembership";
import { useGetMembers } from "../../../services/admin/request/members";

const Members = () => {
  const selectedTab = useMembersStore((state) => state.selectedTab);
  const setSelectedTab = useMembersStore((state) => state.setSelectedTab);

  const getMembers = useGetMembers(selectedTab);

  const tabs = [
    {
      key: "0",
      label: "Pending",
      children: <Pending />,
    },
    {
      key: "1",
      label: "Accepted",
      children: <Accepted />,
    },
    {
      key: "2",
      label: "Declined",
      children: <Declined />,
    },
  ];
  return <Tabs onChange={(e) => setSelectedTab(e)} items={tabs} type="card" />;
};

export default Members;
