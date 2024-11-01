import axiosInstance from "@/axios/axiosInstance.ts";

export const login = (email: string, password: string) => {
  return axiosInstance.post("/auth/login", { email, password });
};

export const register = (name: string, email: string, password: string) => {
  return axiosInstance.post("/auth/register", { name, email, password });
};

export const checkSession = () => {
  return axiosInstance.get("/auth/check-session");
};

export const logout = () => {
  return axiosInstance.post("/auth/logout");
};
