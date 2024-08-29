import { Form, Input, Button } from "antd";

const ReusableForm = ({
  fields,
  onFinish,
  initialValues,
  formLayout,
  form,
  layout,
  placeholder,
  className,
  requiredMark,
}) => {
  return (
    <Form
      {...formLayout}
      initialValues={initialValues}
      onFinish={onFinish}
      form={form}
      layout={layout}
      className={className}
      //   requiredMark={"optional"}
    >
      {fields?.map((field) => (
        <Form.Item
          key={field.name}
          name={field.name}
          label={field.label}
          rules={field.rules}
        >
          {field.component || <Input placeholder={field.label} />}
        </Form.Item>
      ))}
      <Form.Item>
        {/* <Button type="primary" htmlType="submit">
          Submit
        </Button> */}
      </Form.Item>
    </Form>
  );
};

export default ReusableForm;
