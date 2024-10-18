import { useMutation, useQuery } from "@tanstack/react-query";
import { addLoan, getLoans, getMembers } from "../api/loan";

export const useGetLoans = () => {
  return useQuery({
    queryKey: ["getLoans"],
    queryFn: getLoans,
    refetchOnWindowFocus: false,
  });
};

export const useGetMembers = () => {
  return useQuery({
    queryKey: ["getMembersLoan"],
    queryFn: getMembers,
    refetchOnWindowFocus: false,
  });
};

export const useAddLoan = () => {
  return useMutation({
    mutationFn: addLoan,
    mutationKey: "addLoan",
  });
};
