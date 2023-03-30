import { axiosInstance } from "../../../common/AxiosInstance"
import { setUserAnotherValue } from "../../../common/UserAnotherHooks"


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
