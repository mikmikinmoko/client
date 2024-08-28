import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminRoutes from "./PageRoute/Admin";
import SuperAdminRotues from "./PageRoute/SuperAdmin";

const RootRoutes = () => {
  const router = createBrowserRouter([
    { path: "/*", Component: AdminRoutes },
    { path: "/superadmin/*", Component: SuperAdminRotues },
  ]);
  return <RouterProvider router={router} />;
};

export default RootRoutes;
