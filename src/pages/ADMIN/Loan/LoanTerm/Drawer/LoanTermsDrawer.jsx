import { Drawer, Form, Input, Select, Button } from "antd";
import { useAddLoanTerm } from "../../../../../services/admin/request/loan";
import { useLoanStore } from "../../../../../store/admin/useLoan";
import moment from "moment";

const LoanTermsDrawer = ({ form }) => {
  const loanTermDrawer = useLoanStore((state) => state.loanTermDrawer);
  const setLoanTermDrawer = useLoanStore((state) => state.setLoanTermDrawer);

  const addTerm = useAddLoanTerm();

  const onFinish = (val) => {
    addTerm.mutate(
      {
        ...val,
        dateCreated: moment(val.dateCreated.$d).format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        onSuccess: () => {
          setLoanTermDrawer(false);
          form.resetFields();
        },
      },
    );
  };
  return (
    <Drawer
      title="Add Loan Term"
      className="rounded-l-lg"
      open={loanTermDrawer}
      placement="right"
      onClose={() => setLoanTermDrawer(false)}
      footer={
        <Button
          className="float-right"
          onClick={() => form.submit()}
          type="primary"
          loading={addTerm.isPending}
        >
          Submit
        </Button>
      }
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label="Days"
          name="days"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input placeholder="Days" />
        </Form.Item>

        <Form.Item
          label="Interest"
          name="interest"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Select placeholder="Please select interest">
            <Select.Option value="0.015">1.5%</Select.Option>
            <Select.Option value="0.030">3%</Select.Option>
            <Select.Option value="0.045">4.5%</Select.Option>
            <Select.Option value="0.060">6%</Select.Option>
            <Select.Option value="0.075">7.5%</Select.Option>
          </Select>
          {/* <Input defaultValue={"0.0"} /> */}
        </Form.Item>

        <Form.Item label="Descripttions" name="description">
          <Input.TextArea placeholder="Descriptions" />
        </Form.Item>
      </Form>
    </Drawer>
  );
};
export default LoanTermsDrawer;
