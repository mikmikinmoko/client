import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const getParking = async () => {
  const result = await defaultAxios.get("/api/admin/parking/getParking");
  return result;
};
export const getApprovedMember = async () => {
  const result = await defaultAxios.get("/api/admin/parking/getApprovedMember");
  return result;
};

export const addParking = async (body) => {
  const result = await defaultAxios.post("/api/admin/parking/addParking", body);
  return result;
};
export const editMember = async ({ param }) => {
  const result = await defaultAxios.post(
    `/api/admin/membership/viewProfile/${param}`
  );
  return result;
};
export const getPendingMembers = async ({ param }) => {
  const result = await defaultAxios.get(
    `/api/admin/membership/getPending/${param}`
  );
  return result;
};
export const acceptPendingRequest = async ({ param, body }) => {
  const result = await defaultAxios.post(
    `/api/admin/membership/acceptMember/${param}`,
    body
  );
  return result;
};
