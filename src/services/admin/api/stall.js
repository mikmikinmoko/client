import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const getStallOwners = async () => {
  const result = await defaultAxios.get("/api/admin/stall/getStallOwners");
  return result;
};

export const addStallOwner = async (body) => {
  const result = await defaultAxios.post(
    "/api/admin/stall/addStallOwner",
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
