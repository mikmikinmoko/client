import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const getLoans = async () => {
  const result = await defaultAxios.get("/api/admin/loan/getLoans");
  return result;
};

export const getMembers = async () => {
  const result = await defaultAxios.get("/api/admin/loan/getMembers");
  return result;
};

export const addLoan = async (body) => {
  const result = await defaultAxios.post("/api/admin/loan/addLoan", body);
  return result;
};
