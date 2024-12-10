import { Button, Form, Input } from "antd";
import ReusableDrawer from "../../../../../components/Reusable/Drawer/ReusableDrawer";

const TypeForm = ({ open, onClose, form, onFinish, isLoading }) => {
  return (
    <ReusableDrawer
      className="rounded-l-lg"
      open={open}
      onClose={onClose}
      placement="right"
      width={"400px"}
      footer={
        <Button
          className="float-right"
          onClick={() => form.submit()}
          loading={isLoading}
          type="primary"
        >
          Submit
        </Button>
      }
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item name="typeName" label="Stall Type">
          <Input />
        </Form.Item>
      </Form>
    </ReusableDrawer>
  );
};

export default TypeForm;
