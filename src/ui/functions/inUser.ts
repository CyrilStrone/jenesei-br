import { setUserLogin } from "./accessToken";
import { axiosInstance } from "./axiosInstance";

export const inUser = async () => {
    return axiosInstance.get(
        `/profile`)
        .then((res: any) => {
            setUserLogin(res.data.user.login)
            return res.data
        })
        .catch((error) => {
            setUserLogin("")
            throw new Error(error.response.data.message);
        })
}
