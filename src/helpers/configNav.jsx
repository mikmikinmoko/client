import * as ADMIN from "../pages/ADMIN/index";
import { DashboardIcon, UserPlusIcon } from "../assets/resources/icon/Icons";
import {
  CarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  TeamOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const nav = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: <div>Test</div>,
    icon: <DashboardIcon />,
    isFilter: true,
    isShow: true,
    accountType: "SUPERADMIN",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: <ADMIN.Dashboard />,
    icon: <DashboardIcon />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
  },

  // {
  //   path: "membership",
  //   name: "Membership",
  //   // component: <ADMIN.Member />,
  //   icon: <UsergroupAddOutlined />,
  //   isFilter: true,
  //   isShow: true,
  //   accountType: "MEMBER",
  //   children: [
  //     {
  //       path: "member",
  //       name: "Members",
  //       component: <ADMIN.Member />,
  //       // icon: <UserPlusIcon />,
  //       isFilter: true,
  //       isShow: true,
  //     },
  //     {
  //       path: "registration",
  //       name: "Registration",
  //       component: <ADMIN.Registration />,
  //       // icon: <UserPlusIcon />,
  //       isFilter: true,
  //       isShow: true,
  //     },
  //   ],
  // },

  {
    path: "events",
    name: "Events Management",
    // component: <ADMIN.Member />,
    icon: <UserOutlined />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
    children: [
      {
        path: "event",
        name: "Event",
        component: <ADMIN.Events />,
        icon: <ClockCircleOutlined />,
        accountType: "MEMBER",
      },
    ],
  },
  {
    path: "member",
    name: "Members Management",
    // component: <ADMIN.Member />,
    icon: <UserOutlined />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
    children: [
      {
        path: "registration",
        name: "Registration",
        component: <ADMIN.Registration />,
        icon: <UserAddOutlined />,
        isFilter: true,
        isShow: true,
        accountType: "MEMBER",
      },
      {
        path: "pending",
        name: "Pending",
        component: <ADMIN.Pending />,
        icon: <ClockCircleOutlined />,
        accountType: "MEMBER",
      },
      {
        path: "approved",
        name: "Approved",
        component: <ADMIN.Accepted />,
        icon: <CheckCircleOutlined />,
        accountType: "MEMBER",
      },
    ],
  },
  {
    path: "stalls",
    name: "Stalls Management",
    // component: <ADMIN.Stall />,
    icon: <HomeOutlined />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
    children: [
      {
        path: "owner",
        name: "Stall Owner",
        component: <ADMIN.Stall />,
        icon: <HomeOutlined />,
        isFilter: true,
        isShow: true,
        accountType: "MEMBER",
      },
      {
        path: "type",
        name: "Stall Type",
        component: <ADMIN.Type />,
        icon: <HomeOutlined />,
        isFilter: true,
        isShow: true,
        accountType: "MEMBER",
      },
    ],
  },
  {
    path: "/parking",
    name: "Parking Management",
    component: <ADMIN.Parking />,
    icon: <CarOutlined />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
  },
  {
    path: "/loan",
    name: "Loan Management",
    component: <ADMIN.Loan />,
    icon: <CarOutlined />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
  },
  {
    path: "/account",
    name: "Accounts",
    component: <ADMIN.Accounts />,
    icon: <TeamOutlined />,
    isFilter: true,
    isShow: true,
    accountType: "MEMBER",
  },
];
