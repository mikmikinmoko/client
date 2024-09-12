import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../../store/auth/useAuthStore";
import { message } from "antd";
import {
  acceptPendingRequest,
  editMember,
  getPendingMembers,
  registration,
} from "../api/membership";
import { addParking, getApprovedMember, getParking } from "../api/parking";

export const useGetParking = () => {
  return useQuery({
    queryKey: ["getParking"],
    queryFn: getParking,
    refetchOnWindowFocus: false,
  });
};
export const useGetApprovedMember = () => {
  return useQuery({
    queryKey: ["getApprovedMember"],
    queryFn: getApprovedMember,
    refetchOnWindowFocus: false,
  });
};
export const useAddParking = () => {
  return useMutation({
    mutationFn: addParking,
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
