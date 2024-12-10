import { Button, Form, message } from "antd";
import ReusableTable from "../../../../components/Reusable/Table/ReusableTable";
import {
  useAddStallOwner,
  useGetStallOwners,
} from "../../../../services/admin/request/stall";
import ReusableDrawer from "../../../../components/Reusable/Drawer/ReusableDrawer";
import { useOpenDrawer } from "../../../../components/Reusable/useReusableDrawer";
import StallForm from "../Form/Forms";
import dayjs from "dayjs";

const Stall = () => {
  const [form] = Form.useForm();
  const { data, isLoading, refetch } = useGetStallOwners();
  const { drawers, setOpen, toggleDrawer } = useOpenDrawer();
  const addStallOwner = useAddStallOwner();

  const onFinish = (val) => {
    const { dateStarted, ...newVal } = val;
    addStallOwner.mutate(
      {
        ...newVal,
        dateStarted: dayjs(dateStarted).format("YYYY-MM-DD"),
      },
      {
        onSuccess: (data) => {
          console.log(data);
          message.success(data.data.message);
          toggleDrawer("stall", false);
          form.resetFields("");
          refetch();
        },
      }
    );
  };

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
      title: "Section",
      dataIndex: "section",
    },
    {
      title: "Rate",
      dataIndex: "rate",
    },
    {
      title: "Authorize Person",
      dataIndex: "authorizePerson",
    },
  ];

  return (
    <>
      <ReusableDrawer
        open={drawers["stall"] || false}
        onClose={() => setOpen("stall", false)}
        placement={"right"}
        width={"30%"}
        className={"rounded-l-lg"}
        title={"Add Stall Owner"}
        footer={
          <div className="flex justify-end py-2">
            <Button type="primary" onClick={() => form.submit()}>
              Submit Application
            </Button>
          </div>
        }
      >
        <StallForm form={form} onFinish={onFinish} />
      </ReusableDrawer>
      <div className="flex justify-between items-center py-4">
        <div className="text-[18px] text-[#7a7a7a] font-semibold">
          Stall {"Owner's"}
        </div>
        <Button type="primary" onClick={() => toggleDrawer("stall")}>
          Add Stall Owner
        </Button>
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
