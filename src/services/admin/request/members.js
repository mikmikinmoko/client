import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../api/members";

export const useGetMembers = () => {
  return useQuery({
    queryKey: ["getMembers"],
    queryFn: getMembers,
    refetchOnWindowFocus: false,
  });
};
