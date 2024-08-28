import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/ADMIN/Login/Login";
import Mainlayout from "../../pages/ADMIN/MainLayout/MainLayout";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/"} />} />

      {/* this route for unauth */}
      <Route>
        <Route path="/" element={<Mainlayout />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
