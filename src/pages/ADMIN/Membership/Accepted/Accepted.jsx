import dayjs from "dayjs";
import ReusableTable from "../../../../components/Reusable/Table/ReusableTable";
import { useGetPendingMembers } from "../../../../services/admin/request/membership";

const Accepted = () => {
  const { data, isLoading } = useGetPendingMembers(1);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      render: (a) => {
        return <div className="capitalize">{a}</div>;
      },
    },
    {
      title: "Middle Name",
      dataIndex: "middleName",
      render: (a) => {
        return <div className="capitalize">{a}</div>;
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      render: (a) => {
        return <div className="capitalize">{a}</div>;
      },
    },

    {
      title: "Birth Date",
      dataIndex: "birthDate",
      render: (b) => {
        return dayjs(b).format("MMMM DD, YYYY");
      },
    },

    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
    },
  ];

  return (
    <ReusableTable
      data={data?.data}
      columns={columns}
      searchable={true}
      loading={isLoading}
      pagination={{
        showSizeChanger: true,
        defaultPageSize: 10,
        pageSizeOptions: [10, 20, 50, 100],
      }}
      rowKey={"accountId"}
    />
  );
};

export default Accepted;
