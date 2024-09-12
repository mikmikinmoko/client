import { Button, Form } from "antd";
import ReusableTable from "../../../components/Reusable/Table/ReusableTable";
import { useOpenDrawer } from "../../../components/Reusable/useReusableDrawer";
import {
  useAddParking,
  useGetParking,
} from "../../../services/admin/request/parking";
import dayjs from "dayjs";
import ReusableDrawer from "../../../components/Reusable/Drawer/ReusableDrawer";
import ParkingForm from "./Form/ParkingForm";

const Parking = () => {
  const [form] = Form.useForm();
  const addParking = useAddParking();
  const { drawers, setOpen, toggleDrawer } = useOpenDrawer();
  const { data: parking, refetch } = useGetParking();

  const onFinish = (val) => {
    const { dateStarted, ...newval } = val;
    addParking.mutate(
      {
        ...newval,
        dateStarted: dayjs(dateStarted).format("YYYY-MM-DD"),
      },
      {
        onSuccess: () => {
          toggleDrawer("parking", false);
          refetch();
          form.resetFields("");
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
      title: "Date Started",
      dataIndex: "dateStarted",
      render: (b) => {
        return dayjs(b).format("MMMM DD, YYYY");
      },
    },
    {
      title: "Rate",
      dataIndex: "rate",
      // render: (b) => {
      //   return dayjs(b).format("MMMM DD, YYYY");
      // },
    },
    {
      title: "Plate Number",
      dataIndex: "plateNumber",
      // render: (b) => {
      //   return dayjs(b).format("MMMM DD, YYYY");
      // },
    },
    {
      title: "Vehicle Type",
      dataIndex: "vehicleType",
      // render: (b) => {
      //   return dayjs(b).format("MMMM DD, YYYY");
      // },
    },

    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center py-4">
        <div className="text-[18px] text-[#7a7a7a] font-semibold">Parking</div>
        <Button type="primary" onClick={() => toggleDrawer("parking")}>
          Add Parking
        </Button>
      </div>
      <ReusableDrawer
        title={"Parking Application"}
        open={drawers["parking"] || false}
        onClose={() => setOpen("parking", false)}
        placement={"right"}
        className={"rounded-l-lg"}
        width={500}
        footer={
          <div className="flex justify-end py-2">
            <Button type="primary" onClick={() => form.submit()}>
              Submit Application
            </Button>
          </div>
        }
      >
        <ParkingForm form={form} onFinish={onFinish} />
      </ReusableDrawer>
      <ReusableTable data={parking?.data} columns={columns} />;
    </>
  );
};

export default Parking;
