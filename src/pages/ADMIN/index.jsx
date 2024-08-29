import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Accounts = lazy(() => import("./Accounts/Accounts"));
const Registration = lazy(() => import("./Membership/Registration"));
const Member = lazy(() => import("./Membership/Member"));

export { Dashboard, Accounts, Registration, Member };
