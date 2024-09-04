import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Form, Input, message } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import ReusableDrawer from "../../../../components/Reusable/Drawer/ReusableDrawer";
import ReusableTable from "../../../../components/Reusable/Table/ReusableTable";
import {
  useAcceptPendingRequest,
  useGetPendingMembers,
} from "../../../../services/admin/request/membership";
import { useSelectedMember } from "../../../../store/admin/useMembership";

const Pending = () => {
  const [form] = Form.useForm();
  const pending = useGetPendingMembers(0);
  const [showDrawer, setShowDrawer] = useState(false);
  const { setSelectedMember, selectedMember } = useSelectedMember();
  const accpet = useAcceptPendingRequest();

  const columns = [
    pending
      ? {
          title: "Action",
          render: (data) => {
            const items = [
              {
                label: (
                  <Button
                    onClick={() => handleDrawer(data)}
                    className="flex items-center w-full"
                    icon={<UserOutlined style={{ color: "#1890ff" }} />}
                  >
                    View Pending
                  </Button>
                ),
                key: "0",
              },

              // {
              //   label: (
              //     <Popconfirm
              //       description="Are you sure? You want to accept this member"
              //       onConfirm={() => {
              //         accept.mutate(
              //           { param: data.accountId },
              //           {
              //             onSuccess: (data) => {
              //               console.log(data);
              //               pending.refetch();
              //               message.success(data?.data.message);
              //             },
              //             onError: (err) => {
              //               console.log(err);
              //             },
              //           }
              //         );
              //       }}
              //     >
              //       <Button
              //         className="flex items-center  w-full"
              //         icon={
              //           <CheckCircleOutlined style={{ color: "#1890ff" }} />
              //         }
              //       >
              //         Accept Request
              //       </Button>
              //     </Popconfirm>
              //   ),
              //   key: "1",
              // },
            ];
            return (
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                arrow={true}
              >
                <Button
                  type="primary"
                  //   icon={
                  //     clickAction === data.accountId ? (
                  //       <DownOutlined />
                  //     ) : (
                  //       <RightOutlined />
                  //     )
                  //   }
                  className="w-28 text-[#000]"
                >
                  Action
                </Button>
              </Dropdown>
            );
          },
        }
      : {},
    {
      title: "First Name",
      dataIndex: "firstName",
      render: (a) => {
        return <div className="capitalize">{a}</div>;
      },
    },
    {
      title: "Middle Name",
      dataIndex: "middleName",
      render: (a) => {
        return <div className="capitalize">{a}</div>;
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      render: (a) => {
        return <div className="capitalize">{a}</div>;
      },
    },

    {
      title: "Birth Date",
      dataIndex: "birthDate",
      render: (b) => {
        return dayjs(b).format("MMMM DD, YYYY");
      },
    },

    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
    },
  ];

  const handleDrawer = (data) => {
    setShowDrawer(!showDrawer);
    setSelectedMember(data);
  };
  const onFinish = (value) => {
    console.log(value);
    accpet.mutate(
      { body: value, param: selectedMember?.accountId },
      {
        onSuccess: (data) => {
          pending.refetch();
          setShowDrawer(!showDrawer);
          message.success(data?.data.message);
        },
      }
    );
  };

  return (
    <>
      <ReusableDrawer
        open={showDrawer}
        placement={"bottom"}
        height={"70%"}
        className="rounded-t-md"
        onClose={() => setShowDrawer(!showDrawer)}
        title={"Pending Application"}
        footer={
          <div className="flex justify-end py-3">
            <Button type="primary" onClick={() => form.submit()}>
              Accept Request
            </Button>
          </div>
        }
      >
        <div className="  pb-5 flex flex-col">
          <span className="font-medium text-[18px]"> Added Information</span>
          <span>
            Note: Please input the information needed below, if you {"don't"}
            have any please leave it blank
          </span>
        </div>

        <div className="w-1/2">
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item label="Tin Number:" name="tinNumber">
              <Input />
            </Form.Item>
            <Form.Item label="SSS Number:" name="sssNumber">
              <Input />
            </Form.Item>
            <Form.Item label="Philhealth Number:" name="philhealthNumber">
              <Input />
            </Form.Item>
            <Form.Item label="Pag-ibig Number:" name="pagibigNumber">
              <Input />
            </Form.Item>
          </Form>
        </div>
      </ReusableDrawer>
      <ReusableTable
        data={pending?.data?.data}
        columns={columns}
        searchable={true}
        loading={pending.isLoading}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: 10,
          pageSizeOptions: [10, 20, 50, 100],
        }}
        rowKey={"accountId"}
      />
    </>
  );
};

export default Pending;
