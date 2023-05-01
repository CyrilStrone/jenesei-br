import axios, { AxiosError } from "axios";
import { setAccessToken } from "./AccessToken";

export const accessTokenName = "BusinessRouletteToken"

export const axiosInstance = axios.create({
  baseURL: "https://businessroulette.ru:3000/api/",
  timeout: 1000,
  headers: {
    authorization: `Bearer ${localStorage.getItem(accessTokenName)}`
  },
});

// export const axiosInstance = axios.create({
//   baseURL: "http://26.74.162.51:3002/api/",
//   headers: {
//     authorization: `Bearer ${localStorage.getItem(accessTokenName)}`
//   },
// });

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    console.log("error",error)
    if (error?.response?.status === 401) {
      console.log("401")
      // setAccessToken("")
    }
  }
);

export const apiImage = "https://businessroulette.ru:3000/"