import { setUserLogin } from "./AccessToken";
import { accessTokenNameLogin, axiosInstance } from "./AxiosInstance";

export const InUser = async () => {
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
