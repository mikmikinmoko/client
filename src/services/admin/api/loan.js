import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const getLoans = async () => {
  const result = await defaultAxios.get("/api/cms/admin/loan/getLoans");
  return result;
};

export const getMembers = async () => {
  const result = await defaultAxios.get("/api/cms/admin/loan/getMembers");
  return result;
};

export const addLoan = async (body) => {
  const result = await defaultAxios.post("/api/cms/admin/loan/addLoan", body);
  return result;
};

export const getLoanTerms = async () => {
  const result = await defaultAxios.get("api/cms/admin/loan/getLoanTerms");
  return result.data;
};

export const addLoanTerm = async (body) => {
  const result = await defaultAxios.post(
    "api/cms/admin/loan/addLoanTerm",
    body,
  );
  return result.data;
};
