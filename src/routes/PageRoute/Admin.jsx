import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/ADMIN/Login/Login";
import MainLayout from "../../pages/ADMIN/MainLayout/MainLayout";
import { useAuthStore } from "../../store/auth/useAuthStore";
import { Auth, UnAuth } from "./validate";
import { nav } from "../../helpers/configNav";
import { Suspense } from "react";
import PageLoader from "../../components/PageLoader";

const AdminRoutes = () => {
  const { userData } = useAuthStore();

  const filterNav = nav.filter(
    (nav) => nav.accountType === userData?.accountType,
  );
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/"} />} />

      {/* this route for unauth */}
      <Route
        element={
          <UnAuth store={useAuthStore} redirect={filterNav?.[0]?.path || "/"} />
        }
      >
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <Login navigations={filterNav} />
            </Suspense>
          }
        />
      </Route>

      <Route element={<Auth store={useAuthStore} redirect="/" />}>
        <Route element={<MainLayout navigations={filterNav} />}>
          {filterNav.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
          {filterNav.map((obj) =>
            //   console.log(obj)
            obj?.children?.map(({ name, path, component }) => (
              <Route
                key={name}
                path={`${obj.path}/${path}`}
                element={component}
              />
            )),
          )}
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
