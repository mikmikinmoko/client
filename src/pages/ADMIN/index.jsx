import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Accounts = lazy(() => import("./Accounts/Accounts"));
const Registration = lazy(() => import("./Registration/Registration"));
const Pending = lazy(() => import("./Membership/Pending/Pending"));
const Accepted = lazy(() => import("./Membership/Accepted/Accepted"));
const Stall = lazy(() => import("./Stall/Owner/Stall"));
const Type = lazy(() => import("./Stall/Type/Type"));
const Parking = lazy(() => import("./Parking/Parking"));
const Events = lazy(() => import("./Events/Events"));
const Loan = lazy(() => import("./Loan/Loan"));

export {
  Dashboard,
  Accounts,
  Registration,
  Pending,
  Stall,
  Parking,
  Accepted,
  Type,
  Events,
  Loan,
};
