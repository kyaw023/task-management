import { login, register, checkSession } from "@/api/auth.ts";
import useSWR, { mutate } from "swr";

// hooks for auth

// hook for register
export const useRegister = () => {
  const registerUser = async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => {
    const response = await register(name, email, password);
    console.log("response", response);
    return response;
  };
  return { registerUser };
};

//hook for login

export const useLogin = () => {
  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await login(email, password);
    console.log("response", response);
    mutate("/api/user");
    return response;
  };
  return { loginUser };
};

export const useCheckSession = () => {
  const { data, isLoading, error } = useSWR("/api/user", checkSession);
  return { data, isLoading, error };
};
