import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const getMembers = async () => {
  const result = await defaultAxios.get("/api/cms/admin/members/getMembers");
  return result.data;
};
