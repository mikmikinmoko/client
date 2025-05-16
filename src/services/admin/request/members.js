import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../api/members";

export const useGetMembers = (params) => {
  return useQuery({
    queryKey: ["getMembers", params],
    queryFn: () => getMembers(params),
    refetchOnWindowFocus: false,
    enabled: !!params,
  });
};
