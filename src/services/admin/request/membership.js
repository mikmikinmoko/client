import { useMutation, useQuery } from "@tanstack/react-query";
import {
  acceptPendingRequest,
  editMember,
  getMembers,
  getPendingMembers,
  registration,
} from "../api/membership";

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
export const useEditMember = () => {
  return useMutation({
    mutationFn: editMember,
  });
};
export const useGetPendingMembers = (status) => {
  return useQuery({
    queryKey: ["getPendingMembers", status],
    queryFn: () => getPendingMembers({ param: status }),
  });
};
export const useAcceptPendingRequest = () => {
  return useMutation({
    mutationFn: acceptPendingRequest,
  });
};
