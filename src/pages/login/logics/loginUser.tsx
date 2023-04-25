import { setAccessToken } from "../../../ui/functions/AccessToken"
import { axiosInstance } from "../../../ui/functions/AxiosInstance"

export interface ILoginUser {
    email: string
    password: string
}
export const loginUser = async (params: ILoginUser) => {
    return axiosInstance.post(
        '/auth/login', {
        "email": params.email,
        "password": params.password,
    })
        .then((res: any) => {
            setAccessToken(res.data.token);
            return true;
        })
        .catch((error) => {
            return false;
        })
}
