import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const User = lazy(() => import("./Users/Users"));

export { Dashboard, User };
