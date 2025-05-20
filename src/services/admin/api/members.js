import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

<<<<<<< HEAD
export const getMembers = async () => {
  const result = await defaultAxios.get("/api/cms/admin/members/getMembers");
=======
export const getMembers = async (params) => {
  const result = await defaultAxios.get(
    "/api/cms/admin/members/getMembers/" + params,
  );
>>>>>>> 71313a3e48ed8a2dd30f06360aa3697e6e944252
  return result.data;
};
