import { useAuthStore } from "../../../store/auth/useAuthStore";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-1/4">
        <div className="flex items-center justify-center uppercase font-['Poppins']">
          Admin Page
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
