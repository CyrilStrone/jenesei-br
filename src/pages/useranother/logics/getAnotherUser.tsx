import { axiosInstance } from "../../../ui/functions/AxiosInstance"
import { setUserAnotherValue } from "../../../ui/functions/UserAnotherHooks"


export interface IGetAnotherUser {
    id: number
}
export const GetUserAnother = async (params: IGetAnotherUser) => {
    return axiosInstance.get(
        `user/${params.id}`)
        .then((res: any) => { setUserAnotherValue(res.data) })
        .catch(() => {
            setUserAnotherValue({})
        })
}
