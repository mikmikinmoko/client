import { useMutation, useQuery } from "@tanstack/react-query";
import { getLoans } from "../api/loan";

export const useGetLoans = () => {
  return useQuery({
    queryKey: ["getLoans"],
    queryFn: getLoans,
    refetchOnWindowFocus: false,
  });
};
