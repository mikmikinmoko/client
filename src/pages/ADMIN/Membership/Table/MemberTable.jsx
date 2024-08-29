import {
  DownOutlined,
  EditOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Table } from "ant-table-extensions";
import { Button, Dropdown, message } from "antd";
import { useState } from "react";

const MemberTable = ({ data }) => {
  const [clickAction, setClickAction] = useState(null);

  const handleClickAction = (id) => {
    setClickAction((prev) => (prev === id ? null : id));
  };
  const columns = [
    {
      title: "Action",
      render: (data) => {
        const items = [
          {
            label: (
              <Button
                onClick={() => {
                  //   getDoctorById.mutate(data.accountId, {
                  //     onSuccess: ({ data }) => {
                  //       showEditDrawer();
                  //       setMode("view");
                  //       setSelectedId(data);
                  //     },
                  //   });
                }}
                className="flex items-center w-full"
                icon={<UserOutlined style={{ color: "#1890ff" }} />}
              >
                View Profile
              </Button>
            ),
            key: "0",
          },
          {
            label: (
              <Button
                onClick={() => {
                  //   getDoctorById.mutate(data.accountId, {
                  //     onSuccess: ({ data }) => {
                  //       showEditDrawer();
                  //       setMode("edit");
                  //       editForm.setFieldsValue({ ...data });
                  //     },
                  //   });
                }}
                icon={<EditOutlined style={{ color: "#1890ff" }} />}
                className="flex items-center  w-full"
              >
                Edit Profile
              </Button>
            ),
            key: "1",
          },

          // {
          //   label: (
          //     <Popconfirm
          //       description="Are you sure? You want to reset your password"
          //       onConfirm={() => {
          //         resetPassword.mutate(data.accountId, {
          //           onSuccess: (data) => {
          //             message.success(data?.data.message);
          //           },
          //         });
          //       }}
          //     >
          //       <Button
          //         className="flex items-center  w-full"
          //         icon={<KeyOutlined style={{ color: "#1890ff" }} />}
          //       >
          //         Reset Password
          //       </Button>
          //     </Popconfirm>
          //   ),
          //   key: "3",
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
              icon={
                clickAction === data.accountId ? (
                  <DownOutlined />
                ) : (
                  <RightOutlined />
                )
              }
              onClick={() => handleClickAction(data.accountId)}
              className="w-28 text-[#000]"
            >
              Action
            </Button>
          </Dropdown>
        );
      },
    },
    // {
    //   title: "Fulle Name",
    //   render: (a) => {
    //     const fullName = [a.firstName]
    //       .concat(a.middleName, a.lastName)
    //       .join(" ");
    //     return <div className="capitalize">{fullName}</div>;
    //   },
    // },

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
    },

    {
      title: "Full Address",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",

      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.module.localeCompare(b.module),
    },
  ];
  return (
    <Table
      searchable={true}
      exportable={true}
      //   loading={isLoading}
      pagination={{
        showSizeChanger: true,
        defaultPageSize: 10,
        pageSizeOptions: [10, 20, 50, 100],
      }}
      dataSource={data}
      columns={columns}
      className="custom-table"
    />
  );
};

export default MemberTable;
