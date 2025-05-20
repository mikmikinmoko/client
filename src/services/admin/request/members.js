import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../api/members";

<<<<<<< HEAD
export const useGetMembers = () => {
  return useQuery({
    queryKey: ["getMembers"],
    queryFn: getMembers,
    refetchOnWindowFocus: false,
=======
export const useGetMembers = (params) => {
  return useQuery({
    queryKey: ["getMembers", params],
    queryFn: () => getMembers(params),
    refetchOnWindowFocus: false,
    enabled: !!params,
>>>>>>> 71313a3e48ed8a2dd30f06360aa3697e6e944252
  });
};
