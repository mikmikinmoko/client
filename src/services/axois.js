import axios from "axios";
import { message } from "antd";
import { useAuthStore } from "../store/auth/useAuthStore";

export const USERS = {
  ADMIN: { name: "ADMIN", store: useAuthStore },
};

export const axioss = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const axiosData = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});

export const getUserStore = (USER) => {
  return USERS[USER]?.store?.getState();
};

export const createAxiosInstanceWithInterceptor = (type = "data", USER) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };

  if (type === "data") {
    headers["Content-Type"] = "application/json";
  } else {
    headers["content-type"] = "multipart/form-data";
  }

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers,
  });

  instance.interceptors.request.use(async (config) => {
    try {
      const { token } = getUserStore(USER);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        throw new Error("Authorization token not found.");
      }
    } catch (error) {
      console.error({ error });
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      const { reset } = getUserStore(USER);
      const errMessage = error.response?.data;
      if (errMessage?.message === "Invalid token." || errMessage?.code == 300) {
        message.warning(
          "Unable to process transaction. You have to login again.",
        );
        reset();
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );

  return instance;
};
