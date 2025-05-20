// import { UserOutlined } from "@ant-design/icons";
// import { Button, Dropdown, Form, Input, message, Popconfirm, Tag } from "antd";
// import dayjs from "dayjs";
// import { useState } from "react";
// import ReusableDrawer from "../../../../components/Reusable/Drawer/ReusableDrawer";
// import ReusableTable from "../../../../components/Reusable/Table/ReusableTable";
// import {
//   useAcceptPendingRequest,
//   useGetPendingMembers,
// } from "../../../../services/admin/request/membership";
// import { useSelectedMember } from "../../../../store/admin/useMembership";
// import { useOpenDrawer } from "../../../../components/Reusable/useReusableDrawer";
//
// const Pending = () => {
//   const [form] = Form.useForm();
//   const pending = useGetPendingMembers(0);
//   const { drawers, setOpen, toggleDrawer } = useOpenDrawer();
//   const { setSelectedMember, selectedMember } = useSelectedMember();
//   const accpet = useAcceptPendingRequest();
//
//   const columns = [
//     pending
//       ? {
//           title: "Action",
//           render: (data) => {
//             const items = [
//               {
//                 label: (
//                   <Button
//                     onClick={() => {
//                       toggleDrawer("pending");
//                       setSelectedMember(data);
//                     }}
//                     className="flex items-center w-full"
//                     icon={<UserOutlined style={{ color: "#1890ff" }} />}
//                   >
//                     View Pending
//                   </Button>
//                 ),
//                 key: "0",
//               },
//             ];
//             return (
//               <Dropdown
//                 menu={{
//                   items,
//                 }}
//                 trigger={["click"]}
//                 arrow={true}
//               >
//                 <Button
//                   ghost
//                   type="primary"
//                   //   icon={
//                   //     clickAction === data.accountId ? (
//                   //       <DownOutlined />
//                   //     ) : (
//                   //       <RightOutlined />
//                   //     )
//                   //   }
//                   className="w-28 text-[#000]"
//                 >
//                   Action
//                 </Button>
//               </Dropdown>
//             );
//           },
//         }
//       : {},
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (a) => {
//         return (
//           <Tag color={a === 0 ? "#FFC107" : "#28A745"}>
//             {a === 0 ? (
//               <div className="font-semibold font-['Poppins'] uppercase">
//                 pending
//               </div>
//             ) : (
//               <div className="font-semibold font-['Poppins'] uppercase">
//                 approved
//               </div>
//             )}
//           </Tag>
//         );
//       },
//     },
//     {
//       title: "First Name",
//       dataIndex: "firstName",
//       render: (a) => {
//         return <div className="capitalize">{a}</div>;
//       },
//     },
//     {
//       title: "Middle Name",
//       dataIndex: "middleName",
//       render: (a) => {
//         return <div className="capitalize">{a}</div>;
//       },
//     },
//     {
//       title: "Last Name",
//       dataIndex: "lastName",
//       render: (a) => {
//         return <div className="capitalize">{a}</div>;
//       },
//     },
//
//     {
//       title: "Birth Date",
//       dataIndex: "birthDate",
//       render: (b) => {
//         return dayjs(b).format("MMMM DD, YYYY");
//       },
//     },
//
//     {
//       title: "Mobile Number",
//       dataIndex: "mobileNumber",
//     },
//   ];
//
//   // const handleDrawer = (data) => {
//   //   setShowDrawer(!showDrawer);
//   //   setSelectedMember(data);
//   // };
//   const onFinish = (value) => {
//     accpet.mutate(
//       { body: value, param: selectedMember?.accountId },
//       {
//         onSuccess: (data) => {
//           pending.refetch();
//           toggleDrawer("pending", false);
//           message.success(data?.data.message);
//         },
//       },
//     );
//   };
//
//   return (
//     <>
//       <ReusableDrawer
//         open={drawers["pending"] || false}
//         placement={"bottom"}
//         height={"70%"}
//         className="rounded-t-md"
//         onClose={() => setOpen("pending", false)}
//         title={"Pending Application"}
//         footer={
//           <div className="flex justify-end py-3">
//             <Popconfirm title="" description="Are you sure to accept ?">
//               <Button type="primary" onClick={() => form.submit()}>
//                 Accept Request
//               </Button>
//             </Popconfirm>
//           </div>
//         }
//       >
//         <div className="  pb-5 flex flex-col">
//           <span className="font-medium text-[18px]"> Added Information</span>
//           <span>
//             Note: Please input the information needed below, if you {"don't"}
//             have any please leave it blank
//           </span>
//         </div>
//
//         <div className="w-1/2">
//           <Form layout="vertical" form={form} onFinish={onFinish}>
//             <Form.Item label="Tin Number:" name="tinNumber">
//               <Input />
//             </Form.Item>
//             <Form.Item label="SSS Number:" name="sssNumber">
//               <Input />
//             </Form.Item>
//             <Form.Item label="Philhealth Number:" name="philhealthNumber">
//               <Input />
//             </Form.Item>
//             <Form.Item label="Pag-ibig Number:" name="pagibigNumber">
//               <Input />
//             </Form.Item>
//           </Form>
//         </div>
//       </ReusableDrawer>
//       <div className="flex justify-between items-center py-4">
//         <div className="text-[18px] text-[#7a7a7a] font-semibold">Pending</div>
//       </div>
//       <ReusableTable
//         data={pending?.data?.data}
//         columns={columns}
//         searchable={true}
//         loading={pending.isLoading}
//         pagination={{
//           showSizeChanger: true,
//           defaultPageSize: 10,
//           pageSizeOptions: [10, 20, 50, 100],
//         }}
//         rowKey={"accountId"}
//       />
//     </>
//   );
// };
//
// export default Pending;
