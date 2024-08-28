import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/SUPERADMIN/Login/Login";

const SuperAdminRotues = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/superadmin"} />} />

      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default SuperAdminRotues;
