import * as ADMIN from "../pages/ADMIN/index";
import { DashboardIcon, UserPlusIcon } from "../assets/resources/icon/Icons";

export const nav = [
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
    path: "user",
    name: "User",
    component: <ADMIN.User />,
    icon: <UserPlusIcon />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
  },
  {
    path: "members",
    name: "Members",
    // component: <ADMIN.Member />,
    icon: <UserPlusIcon />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
    children: [
      {
        path: "registration",
        name: "Registration",
        component: <ADMIN.Registration />,
        // icon: <UserPlusIcon />,
        isFilter: true,
        isShow: true,
      },
      {
        path: "member",
        name: "Member",
        component: <ADMIN.Member />,
        // icon: <UserPlusIcon />,
        isFilter: true,
        isShow: true,
      },
    ],
  },
];
