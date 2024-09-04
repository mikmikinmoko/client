import { useQuery } from "@tanstack/react-query";

import { getGenderCount, getTotalMembers } from "../api/dashboard";

export const useGeTotalMembers = () => {
  return useQuery({
    queryKey: ["getTotalMembers"],
    queryFn: getTotalMembers,
    refetchOnWindowFocus: false,
  });
};
export const useGetGenderCount = () => {
  return useQuery({
    queryKey: ["getGenderCount"],
    queryFn: getGenderCount,
    refetchOnWindowFocus: false,
  });
};
