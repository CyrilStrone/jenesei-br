import { axiosInstance } from "../../../scommon/AxiosInstance"
import { setUserAnotherValue } from "../../../scommon/UserAnotherHooks"


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
