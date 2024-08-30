import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const getMembers = async () => {
  const result = await defaultAxios.get("/api/admin/membership/getMembers");
  return result;
};
export const registration = async (body) => {
  const result = await defaultAxios.post(
    "/api/admin/membership/registration",
    body
  );
  return result;
};
export const editMember = async ({ param }) => {
  const result = await defaultAxios.post(
    `/api/admin/membership/viewProfile/${param}`
  );
  return result;
};
