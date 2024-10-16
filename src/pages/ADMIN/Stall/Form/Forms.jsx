import { DatePicker, Form, Input, Select } from "antd";
import { stallType } from "../../../../helpers/stall";
import { useGetApprovedMember } from "../../../../services/admin/request/parking";

const StallForm = ({ form, onFinish }) => {
  const { data: members } = useGetApprovedMember();
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item label="Stall Type:" name="type">
        <Select>
          {stallType.map((st) => (
            <Select.Option key={st.id} value={st.value}>
              {st.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Member" name="accountId">
        <Select>
          {members?.data.map((m) => (
            <Select.Option
              key={m.id}
              value={m.accountId}
              className="capitalize"
            >
              {m.fullName}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Section" name="section">
        <Input />
      </Form.Item>
      <Form.Item label="Authorize Person" name="authorizePerson">
        <Input />
      </Form.Item>
      <Form.Item label="Rate" name="rate">
        <Input />
      </Form.Item>
      <Form.Item label="Date Start" name="dateStarted">
        <DatePicker className="w-full" format={"YYYY-MM-DD"} />
      </Form.Item>
    </Form>
  );
};

export default StallForm;
