import * as ADMIN from "../pages/ADMIN/index";
import { DashboardIcon, UserPlusIcon } from "../assets/resources/icon/Icons";
import { TeamOutlined, UsergroupAddOutlined } from "@ant-design/icons";

export const nav = [
  {
    path: "dashboard",
    name: "Dashboard",
    component: <div>Test</div>,
    icon: <DashboardIcon />,
    isFilter: true,
    isShow: true,
    accountType: "SUPERADMIN",
  },
  {
    path: "dashboard",
    name: "Dashboard",
    component: <ADMIN.Dashboard />,
    icon: <DashboardIcon />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
  },

  {
    path: "membership",
    name: "Membership",
    // component: <ADMIN.Member />,
    icon: <UsergroupAddOutlined />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
    children: [
      {
        path: "member",
        name: "Members",
        component: <ADMIN.Member />,
        // icon: <UserPlusIcon />,
        isFilter: true,
        isShow: true,
      },
      {
        path: "registration",
        name: "Registration",
        component: <ADMIN.Registration />,
        // icon: <UserPlusIcon />,
        isFilter: true,
        isShow: true,
      },
    ],
  },
  {
    path: "account",
    name: "Accounts",
    component: <ADMIN.Accounts />,
    icon: <TeamOutlined />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
  },
];
