import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const User = lazy(() => import("./Users/Users"));
const Registration = lazy(() => import("./Registration/Registration"));
const Member = lazy(() => import("./Registration/Member"));

export { Dashboard, User, Registration, Member };
