import { setaccessToken } from "../../../Common/accessToken";
import { axiosInstance } from "../../../Common/axiosInstance";
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
        .then((res: any) => { setaccessToken(res.data.token) })
        .catch(() => {
            setaccessToken("")
        })
}
