import { setAccessToken } from "../../../ui/functions/AccessToken"
import { axiosInstance } from "../../../ui/functions/AxiosInstance"

export interface ILoginUser {
    login: string
    password: string
    checked: boolean
}

export const loginUser = async (params: ILoginUser) => {
    return axiosInstance.post(
        '/auth/login', {
        "login": params.login,
        "password": params.password,
    }, { withCredentials: true })
        .then((res: any) => {
            if (res.data.token) {
                setAccessToken(res.data.token);
                return res.data.token
            }
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}

