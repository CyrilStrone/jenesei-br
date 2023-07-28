import axios, { AxiosError } from "axios";
import { setAccessToken, UserLogout } from "./accessToken";

export const RememberRefreshName = "BusinessRouletteRememberRefresh"
export const accessTokenName = "BusinessRouletteToken"

export const ApiLocation = "https://data-api.oxilor.com"
export const ApiLocationAnother = "https://dataservice.accuweather.com"
export const ApiImage = "https://businessroulette.ru"
export const axiosInstance = axios.create({
  baseURL: "https://businessroulette.ru/api",
  timeout: 1000,
  withCredentials: true,
  headers: {
    authorization: `Bearer ${localStorage.getItem(accessTokenName)}`
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error?.response?.status === 401) {
      if (localStorage.getItem(RememberRefreshName) === "true" && localStorage.getItem(accessTokenName)?.length) {
        await refreshToken()
      } else {
        UserLogout()
      }
    }
  }
);
export const refreshToken = async () => {
  return await axios
    .get('https://businessroulette.ru:3000/api/auth/refresh')
    .then((res: any) => {
      if (res.data.token) {
        setAccessToken(res.data.token);
      }
    })
    .catch((error) => {
      UserLogout()
      throw new Error(error.response.data.message);
    })
}