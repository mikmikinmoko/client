import { DatePicker, Form, Input, Select } from "antd";
import { vehileType } from "../../../../helpers/vehicleType";
import { useGetApprovedMember } from "../../../../services/admin/request/parking";

const ParkingForm = ({ form, onFinish }) => {
  const { data: members } = useGetApprovedMember();

  return (
    <>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label="Member" name="accountId">
          <Select>
            {members?.data?.map((m) => (
              <Select.Option key={m.id} value={m.accountId}>
                <div className="capitalize">{m.fullName}</div>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Plate Number:" name="plateNumber">
          <Input />
        </Form.Item>
        <Form.Item label="Vehicle Type:" name="vehicleType">
          <Select>
            {vehileType.map((v) => (
              <Select.Option key={v.id} value={v.label}>
                {v.label.toLocaleUpperCase()}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Rate:" name="rate">
          <Input />
        </Form.Item>
        <Form.Item label="Date Start:" name="dateStarted">
          <DatePicker className="w-full" format={"YYYY-MM-DD"} />
        </Form.Item>
      </Form>
    </>
  );
};

export default ParkingForm;
