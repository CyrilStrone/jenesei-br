import axios, { AxiosError } from "axios";
import { UserLogout } from "./accessToken";
import { connectChat } from "./useSocketChat";
import createSocketChat from "./createSocketChat";
import { setUserSocketChat } from "./hooks";

export const rememberRefreshName = "BusinessRouletteRememberRefresh";
export const accessTokenName = "BusinessRouletteToken";

export const ApiLocation = "https://data-api.oxilor.com";
export const ApiLocationAnother = "https://dataservice.accuweather.com";
export const ApiImage = "https://businessroulette.ru";
export const axiosInstance = axios.create({
  baseURL: "https://businessroulette.ru/api",
  timeout: 1000,
  withCredentials: true,
});

export const saveTokensToLocalStorage = (accessToken: string) => {
  localStorage.setItem(accessTokenName, accessToken);
};

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(accessTokenName);
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: any = error.config;
    if (error?.response?.status === 401) {
      if (
        localStorage.getItem(rememberRefreshName) === "true" &&
        localStorage.getItem(accessTokenName)?.length &&
        process.env.NODE_ENV !== "development"
      ) {
        try {
          originalRequest._retry = true;
          const result = await refreshToken();
          if (result) {
            saveTokensToLocalStorage(result);
            originalRequest.headers["Authorization"] = `Bearer ${result}`;
            connectChat();
            return axiosInstance(originalRequest);
          } else {
            UserLogout();
          }
        } catch {
          UserLogout();
        }
      } else {
        UserLogout();
      }
    }
  }
);

export const refreshToken = async () => {
  return await axiosInstance
    .get("https://businessroulette.ru:3000/api/auth/refresh")
    .then((res: any) => {
      if (res.data.token) {
        return res.data.token;
      }
    })
    .catch(() => {
      return false;
    });
};
export const refreshTokenChat = async () => {
  const result = await refreshToken();
  if (result) {
    saveTokensToLocalStorage(result);
    setUserSocketChat(createSocketChat());
  }
};
