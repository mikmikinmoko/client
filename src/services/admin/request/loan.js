import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addLoan,
  addLoanTerm,
  getLoans,
  getLoanTerms,
  getMembers,
} from "../api/loan";

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

export const useGetLoanTerms = () => {
  return useQuery({
    queryKey: ["getLoanTerms"],
    queryFn: getLoanTerms,
    refetchOnWindowFocus: false,
  });
};

export const useAddLoanTerm = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addLoanTerm,
    onSuccess: () => {
      queryClient.invalidateQueries("getLoanTerms");
    },
  });
};
