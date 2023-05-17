import { accessTokenNameLogin, axiosInstance } from "./AxiosInstance";

export const InUser = async () => {
    return axiosInstance.get(
        `/profile`)
        .then((res: any) => {
            localStorage.setItem(accessTokenNameLogin, (res.data.user.login));
            return res.data
        })
        .catch((error) => {
            localStorage.setItem(accessTokenNameLogin, (""));
            throw new Error(error.response.data.message);
        })
}
