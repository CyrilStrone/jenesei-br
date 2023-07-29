import { axiosInstance } from "../../../ui/functions/axiosInstance"

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
            if (res.data.token) {
                return res.data.token
            }
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}

