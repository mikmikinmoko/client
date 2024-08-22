import { createBrowserRouter } from "react-router-dom";
import Authenticated from "../pages/Authenticated/Authenticated";
import Dashboard from "../pages/Authenticated/Dashboard/Dashboard";
import Registration from "../pages/Authenticated/Registration/Registration";
import Contacts from "../pages/Authenticated/Contacts/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Authenticated />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/contacts",
        children: [
          {
            path: "items",
            element: <Contacts />,
          },
        ],
      },
    ],
  },
]);
