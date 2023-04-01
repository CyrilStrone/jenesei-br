import axios from "axios";

export const accessTokenName = "accessTokenName"

export const axiosInstance = axios.create({
    baseURL: "https://5.63.154.65:3000/",
    headers: {
		authorization: `Bearer ${localStorage.getItem(accessTokenName)}`
	},
});