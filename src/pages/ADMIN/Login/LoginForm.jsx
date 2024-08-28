import { Button, Form, Input } from "antd";

const LoginForm = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Username">
        <Input />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
