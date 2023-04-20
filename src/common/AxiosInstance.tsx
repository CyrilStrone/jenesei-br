import axios from "axios";

export const accessTokenName = "accessTokenName"

export const axiosInstance = axios.create({
  baseURL: "https://businessroulette.ru:3000/",
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