/* eslint-disable react/prop-types */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/auth/useAuthStore";

// const userEnums = {
//   doctor: "/doctor",
//   admin: "/admin",
// };

// const validateuser = (accountType) => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { pathname } = useLocation();
//   const user = pathname.split("/")[1];
//   // eslint-disable-next-line react-hooks/rules-of-hooks

//   if (accountType) {
//     if (
//       (userEnums[user] && accountType == user.toUpperCase()) ||
//       accountType === "ROOT"
//     ) {
//       return false;
//     } else if (accountType == "PATIENT" && !userEnums[user]) {
//       return false;
//     } else {
//       return userEnums[user] || "/home";
//     }
//   } else {
//     return false;
//   }
// };

export const Auth = ({ store, redirect }) => {
  const { token } = useAuthStore();
  const location = useLocation();

  //   if (validateuser(userData?.user?.accountType)) {
  //     return (
  //       <Navigate
  //         to={userEnums[userData?.user?.accountType?.toLowerCase()] || "/home"}
  //         state={{ from: location }}
  //         replace
  //       />
  //     );
  //   }

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={redirect} state={{ from: location }} replace />
  );
};

export const UnAuth = ({ store, redirect }) => {
  const { token, userData } = useAuthStore();
  const location = useLocation();

  return token ? (
    <Navigate to={redirect} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
