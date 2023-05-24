import axios, { AxiosError } from "axios";
import { setAccessToken } from "./AccessToken";

export const accessTokenName = "BusinessRouletteToken"
export const accessTokenNameLogin = "BusinessRouletteLogin"

export const axiosInstance = axios.create({
  baseURL: "https://businessroulette.ru:3000/api",
  timeout: 1000,
  headers: {
    authorization: `Bearer ${localStorage.getItem(accessTokenName)}`
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (localStorage.getItem(accessTokenName)?.length && error?.response?.status === 401) {
      await refreshToken()
    }
  }
);

export const apiImage = "https://businessroulette.ru:3000"

export const ApiLocation = axios.create({
  baseURL: "https://data-api.oxilor.com"
});

export const ApiLocationAnother = axios.create({
  baseURL: "https://dataservice.accuweather.com"
});

export const refreshToken = async () => {
  return await axios
  .get('https://businessroulette.ru:3000/api/auth/refresh',{withCredentials: true})
    .then((res: any) => {
      if (res.data.token) {
        setAccessToken(res.data.token);
      }
    })
    .catch((error) => {
      setAccessToken("")
      throw new Error(error.response.data.message);
    })
}