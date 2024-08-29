import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../../store/auth/useAuthStore";
import { message } from "antd";
import { getMembers, registration } from "../api/membership";

export const useGetMembers = () => {
  return useQuery({
    queryKey: ["getMembers"],
    queryFn: getMembers,
    refetchOnWindowFocus: false,
  });
};
export const useRegistration = () => {
  return useMutation({
    mutationFn: registration,
  });
};
