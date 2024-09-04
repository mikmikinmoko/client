import { Button } from "antd";
import ReusableTable from "../../../components/Reusable/Table/ReusableTable";
import { useGetStallOwners } from "../../../services/admin/request/stall";

const Stall = () => {
  const { data, isLoading } = useGetStallOwners();

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
      title: "Type",
      dataIndex: "type",
    },

    {
      title: "Authorize Person",
      dataIndex: "authorizePerson",
    },
    {
      title: "Section",
      dataIndex: "section",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center py-4">
        <div className="text-[18px] text-[#7a7a7a] font-semibold">
          Stall {"Owner's"}
        </div>
        <Button type="primary">Add Stall Owner</Button>
      </div>
      <ReusableTable
        data={data?.data}
        isLoading={isLoading}
        columns={columns}
        rowKey={"accountId"}
      />
    </>
  );
};

export default Stall;
