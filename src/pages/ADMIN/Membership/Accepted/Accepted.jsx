import dayjs from "dayjs";
import ReusableTable from "../../../../components/Reusable/Table/ReusableTable";
import { useGetPendingMembers } from "../../../../services/admin/request/membership";
import { Tag } from "antd";

const Accepted = () => {
  const { data, isLoading } = useGetPendingMembers(1);

  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      render: (a) => {
        return (
          <Tag color={a === 0 ? "#FFC107" : "#28A745"}>
            {a === 0 ? (
              <div className="font-semibold font-['Poppins'] uppercase">
                pending
              </div>
            ) : (
              <div className="font-semibold font-['Poppins'] uppercase">
                approved
              </div>
            )}
          </Tag>
        );
      },
    },
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
    <>
      <div className="flex justify-between items-center py-4">
        <div className="text-[18px] text-[#7a7a7a] font-semibold">Accepted</div>
      </div>
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
    </>
  );
};

export default Accepted;
