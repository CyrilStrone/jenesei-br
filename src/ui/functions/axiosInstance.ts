import axios from "axios";
import { connectChat, disconnectChat } from "./useSocketChat";
import createSocketChat from "./createSocketChat";
import { setUserSocketChat, setUserValue } from "./hooks";

export const checkRefreshName = "BusinessRouletteRefreshCheck";
export const accessTokenName = "BusinessRouletteToken";

export const ApiLocation = "https://data-api.oxilor.com";
export const ApiLocationAnother = "https://dataservice.accuweather.com";
export const ApiImage = "https://businessroulette.ru";
export const axiosInstance = axios.create({
  baseURL: "https://businessroulette.ru/api",
  timeout: 1000,
  withCredentials: true,
});

export const changeAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem(accessTokenName, accessToken);
};

export const changeCheckRefreshToLocalStorage = (check: string) => {
  localStorage.setItem(checkRefreshName, check);
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
  async (error: any) => {
    const originalRequest: any = error.config;
    if (error?.response?.status === 401) {
      if (
        localStorage.getItem(checkRefreshName) === "true" &&
        localStorage.getItem(accessTokenName)?.length &&
        process.env.NODE_ENV !== "development" &&
        error?.response?.data?.message !== "Unauthorized"
      ) {
        try {
          originalRequest._retry = true;
          const result = await refreshToken();
          if (result) {
            changeAccessTokenToLocalStorage(result);
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
    } else if (error?.response?.status === 0) {
      console.error("Ошибка CORS:", error.message);
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
  if (localStorage.getItem(accessTokenName)?.length) {
    const result = await refreshToken();
    if (result) {
      changeAccessTokenToLocalStorage(result);
      setUserSocketChat(createSocketChat());
    }
  }
};

export const UserLogout = () => {
  document.cookie = "name=<Refresh>; expires=-1";
  document.cookie = "name=<Session>; expires=-1";
  setUserValue(null);
  changeAccessTokenToLocalStorage("");
  changeCheckRefreshToLocalStorage("true");
  disconnectChat();
};
