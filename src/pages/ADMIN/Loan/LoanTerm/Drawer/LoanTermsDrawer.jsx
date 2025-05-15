import { Form, Input } from "antd";

const LoanTermsDrawer = ({ form }) => {
  const onFinish = (val) => {
    console.log(val);
  };
  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item label="Days" name="days">
        <Input />
      </Form.Item>

      <Form.Item label="Interest" name="interest">
        <Input />
      </Form.Item>

      <Form.Item label="Descripttions" name="descriptions">
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};
export default LoanTermsDrawer;
