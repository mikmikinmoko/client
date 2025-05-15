import { Button, Form, Input, message } from "antd";
import { useLogin } from "../../../services/admin/request/login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form] = Form.useForm();
  const login = useLogin();

  const navigate = useNavigate();

  const onFinish = (val) => {
    login.mutate(val);
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
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
