import { createAxiosInstanceWithInterceptor } from "../../axois";

const defaultAxios = createAxiosInstanceWithInterceptor("data", "ADMIN");

export const login = async (body) => {
  const result = defaultAxios.post("api/auth/login", body);
  return result;
};
