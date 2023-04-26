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
    })
        .then((res: any) => {
            setAccessToken(res.data.token);
            window.location.reload(); //TODO:Это как вообще работает?
        })
        .catch((error) => {
        })
}
