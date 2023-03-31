import { axiosInstance } from "../../../scommon/AxiosInstance"

export interface IgetChangeUser {
    id: number
    firstName:string
    lastName:string
}
export const getChangeUser = async (params: IgetChangeUser) => {
    return axiosInstance.put(
        `/user/${params.id}`, {
        "firstName": params.firstName,
        "lastName": params.lastName,
    })
        .then((res: any) => {  })
        .catch(() => {
            
        })
}
