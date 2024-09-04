import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const getTotalMembers = async () => {
  const result = await defaultAxios.get("/api/admin/dashboard/getTotalMembers");
  return result;
};
export const getGenderCount = async () => {
  const result = await defaultAxios.get("/api/admin/dashboard/getGenderCount");
  return result;
};
