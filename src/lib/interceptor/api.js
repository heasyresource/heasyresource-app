import axios from "axios";
import { signOut } from "next-auth/react";

const handleResponseError = async (error) => {
  if (
    error.response &&
    error.response.message ===
      "Authorization is required to access this resource."
  ) {
    await signOut({ redirect: true, callbackUrl: "/signin" });
  }
};
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    handleResponseError(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    handleResponseError(error);
    return Promise.reject(error);
  }
);

export default api;
