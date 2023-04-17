import axios from "axios";

export const accessTokenName = "accessTokenName"

export const axiosInstance = axios.create({
    baseURL: "https://businessroulette.ru:3000/",
    headers: {
		authorization: `Bearer ${localStorage.getItem(accessTokenName)}`
	},
});