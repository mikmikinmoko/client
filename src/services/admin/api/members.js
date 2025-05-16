import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const getMembers = async (params) => {
  const result = await defaultAxios.get(
    "/api/cms/admin/members/getMembers/" + params,
  );
  return result.data;
};
