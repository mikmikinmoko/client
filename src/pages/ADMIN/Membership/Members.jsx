<<<<<<< HEAD
import { Tabs, Tag } from "antd";
=======
import { Tabs } from "antd";
>>>>>>> 71313a3e48ed8a2dd30f06360aa3697e6e944252
import Accepted from "./Tabs/Accepted";
import Pending from "./Tabs/Pending";
import Declined from "./Tabs/Declined";
import { useMembersStore } from "../../../store/admin/useMembership";
import { useGetMembers } from "../../../services/admin/request/members";

const Members = () => {
  const selectedTab = useMembersStore((state) => state.selectedTab);
  const setSelectedTab = useMembersStore((state) => state.setSelectedTab);

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const getMembers = useGetMembers(selectedTab);
<<<<<<< HEAD
>>>>>>> 3a59d1005b5f7403b2446a3184ed30c35c57f710
=======
>>>>>>> 3a59d1005b5f7403b2446a3184ed30c35c57f710
=======
  const getMembers = useGetMembers(selectedTab);
>>>>>>> 71313a3e48ed8a2dd30f06360aa3697e6e944252

  const tabs = [
    {
      key: "0",
      label: "Pending",
<<<<<<< HEAD
      children: <Pending data={pendingMembers} columns={columns} />,
=======
      children: <Pending />,
>>>>>>> 71313a3e48ed8a2dd30f06360aa3697e6e944252
    },
    {
      key: "1",
      label: "Accepted",
<<<<<<< HEAD
      children: <Accepted data={acceptedMembers} columns={columns} />,
=======
      children: <Accepted />,
>>>>>>> 71313a3e48ed8a2dd30f06360aa3697e6e944252
    },
    {
      key: "2",
      label: "Declined",
<<<<<<< HEAD
      children: <Declined data={declinedMembers} columns={columns} />,
=======
      children: <Declined />,
>>>>>>> 71313a3e48ed8a2dd30f06360aa3697e6e944252
    },
  ];
  return <Tabs onChange={(e) => setSelectedTab(e)} items={tabs} type="card" />;
};

export default Members;
