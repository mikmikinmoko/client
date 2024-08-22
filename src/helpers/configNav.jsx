import { UserAddOutlined } from "@ant-design/icons";

export const nav = [
  {
    id: 1,
    path: "/dashboard",
    label: "Dashboard",
    icon: <UserAddOutlined />,
  },
  {
    id: 2,
    path: "/registration",
    label: "Registration",
    icon: <UserAddOutlined />,
  },
  {
    id: 3,
    path: "/contacts",
    label: "Contacts",
    icon: <UserAddOutlined />,
    children: [
      {
        path: "items",
        label: "Items",
        icon: <UserAddOutlined />,
      },
    ],
  },
];
