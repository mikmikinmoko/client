import { Tabs, Tag } from "antd";
import Accepted from "./Tabs/Accepted";
import Pending from "./Tabs/Pending";
import Declined from "./Tabs/Declined";
import { useMembersStore } from "../../../store/admin/useMembership";
import { useGetMembers } from "../../../services/admin/request/members";

const Members = () => {
  // const selectedTab = useMembersStore((state) => state.selectedTab);
  // const setSelectedTab = useMembersStore((state) => state.setSelectedTab);

  const { data, isLoading } = useGetMembers();
  const pendingMembers = data?.filter((m) => m.status === 0);
  const acceptedMembers = data?.filter((m) => m.status === 1);
  const declinedMembers = data?.filter((m) => m.status === 2);

  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        if (status === 0) return <Tag color="gray">PENDING</Tag>;
        if (status === 1) return <Tag color="green">ACCEPTED</Tag>;

        if (status === 2) return <Tag color="red">DECLINED</Tag>;
      },
    },
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Middle Name",
      dataIndex: "middleName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
  ];

  const tabs = [
    {
      key: "0",
      label: "Pending",
      children: <Pending data={pendingMembers} columns={columns} />,
    },
    {
      key: "1",
      label: "Accepted",
      children: <Accepted data={acceptedMembers} columns={columns} />,
    },
    {
      key: "2",
      label: "Declined",
      children: <Declined data={declinedMembers} columns={columns} />,
    },
  ];
  return <Tabs onChange={(e) => setSelectedTab(e)} items={tabs} type="card" />;
};

export default Members;
