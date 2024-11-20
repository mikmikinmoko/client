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

export const getStallTypes = async () => {
  const result = await defaultAxios.get("/api/admin/stall/getStallTypes");
  return result;
};

export const addStallType = async (body) => {
  const result = await defaultAxios.post("/api/admin/stall/addStallType", body);
  return result;
};
