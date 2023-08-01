import { axiosInstance } from "../../../ui/functions/axiosInstance"

export interface ILoginUser {
    login: string
    password: string
    checked: boolean
}

export const loginUser = async (params: ILoginUser) => {
    return axiosInstance.post(
        '/auth/login', { ...params })
        .then((res: any) => {
            return res.data?.token
        })
        .catch((error) => {
            throw error;
        })
}

