import { Form, Input, Select } from "antd";
import { useGetMembers } from "../../../services/admin/request/loan";

const LoanDrawer = ({ form, onFinish }) => {
  const { data } = useGetMembers();

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
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item label="Applicant" name="accountId">
        <Select
          onChange={(e) => console.log(e)}
          options={data?.data.map((d) => {
            return {
              value: d.accountId,
              label: `${d.firstName} ${d.middleName ? d.middleName : ""} ${
                d.lastName
              }`,
            };
          })}
        />
      </Form.Item>
      <Form.Item label="Stall No" name="stallNo">
        <Input placeholder="Stall No" />
      </Form.Item>
      <Form.Item label="Amount" name="amount">
        <Input placeholder="Amount" />
      </Form.Item>
      <Form.Item label="Terms" name="term">
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
