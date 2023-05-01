import { axiosInstance } from "../../../ui/functions/AxiosInstance"

export interface IgetUserChange {
    id: number
    firstName:string
    lastName:string
}
export const getUserChange = async (params: IgetUserChange) => {
    return axiosInstance.put(
        `/user/${params.id}`, {
        "firstName": params.firstName,
        "lastName": params.lastName,
    })
        .then((res: any) => {  })
        .catch(() => {
            
        })
}
