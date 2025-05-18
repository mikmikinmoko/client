import { DatePicker, Form, Input, Select } from "antd";
import { useGetMembers } from "../../../services/admin/request/loan";

const LoanDrawer = ({ form, onFinish }) => {
  const { data } = useGetMembers();

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item label="Borrower Name" name="accountId">
        <Select
          placeholder="Select Borrower"
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

      <Form.Item label="Date" name="dateLoan">
        <DatePicker className="w-full" format={"YYYY-MM-DD"} />
      </Form.Item>

      <Form.Item label="Month/s" name="months">
        <Input placeholder="Months" />
      </Form.Item>

      <Form.Item label="Principal" name="principal">
        <Input placeholder="Principal" />
      </Form.Item>

      <Form.Item label="Loan Interest" name="loanInterest">
        <Input disabled placeholder="Interest on loan" />
      </Form.Item>

      <Form.Item label="CBU" name="cbu">
        <Input disabled placeholder="CBU" />
      </Form.Item>

      <Form.Item label="Savings" name="savings">
        <Input disabled placeholder="Savings" />
      </Form.Item>

      <Form.Item label="Savings" name="savings">
        <Input disabled placeholder="Savings" />
      </Form.Item>
    </Form>
  );
};

export default LoanDrawer;
