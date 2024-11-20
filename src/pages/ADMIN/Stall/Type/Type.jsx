import { Button, Card, Form } from "antd";
import TypeForm from "./Form/TypeForm";
import { useState } from "react";
import ReusableTable from "../../../../components/Reusable/Table/ReusableTable";
import {
  useGetStallTypes,
  useAddStallType,
} from "../../../../services/admin/request/stall";

const Type = () => {
  const [newType, setNewType] = useState(false);
  const { data, isLoading, refetch } = useGetStallTypes();
  const [form] = Form.useForm();
  const addStallType = useAddStallType();

  console.log(form);

  const onHandleOpen = () => {
    setNewType(!newType);
  };

  const onHandleClose = () => {
    setNewType(!newType);
  };
  const columns = [
    {
      title: "Stall Type",
      dataIndex: "typeName",
    },
    {
      title: "Date Created",
      dataIndex: "dateCreated",
    },
    {
      title: "Date Updated",
      dataIndex: "dateUpdated",
    },
  ];

  const onFinish = (e) => {
    addStallType.mutate(e, {
      onSuccess: () => {
        refetch();
        onHandleClose();
        form.resetFields();
      },
    });
  };
  return (
    <>
      <TypeForm
        open={newType}
        onClose={onHandleClose}
        form={form}
        onFinish={onFinish}
      />
      <Card
        title="Stall Type"
        extra={<Button onClick={onHandleOpen}>Add New Type</Button>}
      >
        <ReusableTable
          columns={columns}
          data={data?.data}
          loading={isLoading}
        />
      </Card>
    </>
  );
};

export default Type;
