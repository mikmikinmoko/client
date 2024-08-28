import { UserAddOutlined } from "@ant-design/icons";
import * as ADMIN from "../pages/ADMIN/index";
import { DashboardIcon, UserPlusIcon } from "../assets/resources/icon/Icons";

export const nav = [
  {
    path: "dashboard",
    label: "Dashboard",
    component: <ADMIN.Dashboard />,
    icon: <DashboardIcon />,
    isFilter: true,
    isShow: true,
    accountType: "ADMIN",
  },
  {
    path: "user",
    label: "User",
    component: <ADMIN.User />,
    icon: <UserPlusIcon />,
    isFilter: true,
    isShow: true,
    accountType: "ADMIN",
  },
];
