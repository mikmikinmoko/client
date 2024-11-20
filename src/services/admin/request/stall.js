import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../../store/auth/useAuthStore";
import { message } from "antd";
import {
  acceptPendingRequest,
  editMember,
  getPendingMembers,
  registration,
} from "../api/membership";
import {
  addStallOwner,
  addStallType,
  getStallOwners,
  getStallTypes,
} from "../api/stall";

export const useGetStallOwners = () => {
  return useQuery({
    queryKey: ["getStallOwners"],
    queryFn: getStallOwners,
    refetchOnWindowFocus: false,
  });
};

export const useAddStallOwner = () => {
  return useMutation({
    mutationFn: addStallOwner,
  });
};

export const useGetStallTypes = () => {
  return useQuery({
    queryKey: ["getStallTypes"],
    queryFn: getStallTypes,
    refetchOnWindowFocus: false,
  });
};

export const useAddStallType = () => {
  return useMutation({
    mutationFn: addStallType,
  });
};
// export const useEditMember = () => {
//   return useMutation({
//     mutationFn: editMember,
//   });
// };
// export const useGetPendingMembers = (status) => {
//   return useQuery({
//     queryKey: ["getPendingMembers", status],
//     queryFn: () => getPendingMembers({ param: status }),
//   });
// };
// export const useAcceptPendingRequest = () => {
//   return useMutation({
//     mutationFn: acceptPendingRequest,
//   });
// };
