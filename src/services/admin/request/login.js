import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../../store/auth/useAuthStore";
import { login } from "../api/login";
import { message } from "antd";

export const useLogin = () => {
  const { setToken, setuserData } = useAuthStore();

  return useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      setuserData(data);
      setToken(data.token);
    },
    onError: (error) => {
      message.warning(error.response.data.message);
    },
  });
};
