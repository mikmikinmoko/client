import { Button, Dropdown, Tag } from "antd";
import ReusableTable from "../../../components/Reusable/Table/ReusableTable";
import { useGetLoans } from "../../../services/admin/request/loan";

const TableLoan = () => {
  const { data: loans, isLoading } = useGetLoans();

  const columns = [
    {
      title: "Action",
      dataIndex: null,
      render: (data) => {
        const items = [
          {
            label: (
              <Button
                onClick={() => {}}
                className="flex items-center w-full"
                //   icon={<UserOutlined style={{ color: "#1890ff" }} />}
              >
                View Details
              </Button>
            ),
            key: "0",
          },
        ];
        return (
          <Dropdown menu={{ items }}>
            <Button>Action</Button>
          </Dropdown>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (a) => {
        return (
          <Tag color={a === -1 ? "#FF2C2C" : a === 0 ? "#FFC107" : "#28A745"}>
            {a === -1 ? (
              <div className="font-semibold font-['Poppins'] uppercase">
                cancelled
              </div>
            ) : a === 0 ? (
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
      title: "Applicant",
      dataIndex: "nameOfApplicant",
      render: (a) => {
        return <div className="capitalize">{a}</div>;
      },
    },

    {
      title: "Amount",
      dataIndex: "amount",
      //   render: (b) => {
      //     // return dayjs(b).format("MMMM DD, YYYY");
      //   },
    },

    {
      title: "Terms",
      dataIndex: "term",
      render: (t) => {
        return `${t} Days`;
      },
    },
  ];

  return (
    <ReusableTable data={loans?.data} isLoading={isLoading} columns={columns} />
  );
};

export default TableLoan;
