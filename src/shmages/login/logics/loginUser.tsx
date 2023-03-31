import { setAccessToken } from "../../../scommon/AccessToken"
import { axiosInstance } from "../../../scommon/AxiosInstance"

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
        .then((res: any) => { setAccessToken(res.data.token) })
        .catch(() => {
            setAccessToken("")
        })
}
