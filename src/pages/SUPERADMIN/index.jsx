import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const User = lazy(() => import("./Users"));

export { Dashboard, User };
