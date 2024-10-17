import { Form, Input, Select } from "antd";
import { useGetMembers } from "../../../services/admin/request/loan";

const LoanDrawer = () => {
  const { data } = useGetMembers();
  console.log(data);
  const terms = [
    {
      id: 1,
      value: 30,
      label: "1 Month",
    },
    {
      id: 2,

      value: 60,
      label: "2 Months",
    },
    {
      id: 3,

      value: 90,
      label: "3 Months",
    },
    {
      id: 4,

      value: 120,
      label: "4 Months",
    },
    {
      id: 5,

      value: 150,
      label: "5 Months",
    },
    {
      id: 6,

      value: 180,
      label: "6 Months",
    },
  ];
  return (
    <Form layout="vertical">
      <Form.Item label="Applicant">
        <Select
          onChange={(e) => console.log(e)}
          options={data?.data.map((d) => {
            return {
              value: d.accountId,
              label: d.fullName,
            };
          })}
        />
      </Form.Item>
      <Form.Item label="Stall No">
        <Input placeholder="Stall No" />
      </Form.Item>
      <Form.Item label="Amount">
        <Input placeholder="Amount" />
      </Form.Item>
      <Form.Item label="Terms">
        <Select
          placeholder="Please Select Terms"
          className="uppercase"
          options={terms.map((t) => {
            return {
              value: t.value,
              label: t.label,
            };
          })}
        />
      </Form.Item>
    </Form>
  );
};

export default LoanDrawer;
