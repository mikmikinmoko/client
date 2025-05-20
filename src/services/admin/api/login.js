import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const login = async (body) => {
  const result = defaultAxios.post("/api/cms/auth/login", body);
  return result;
};
