import { setAnotheUserValue } from "../../../Common/hooksAnotherUser";
import { axiosInstance } from "../../../Common/axiosInstance";
export interface IGetAnotherUser {
    id: number
}
export const GetAnotherUser = async (params: IGetAnotherUser) => {
    return axiosInstance.get(
        `user/${params.id}`)
        .then((res: any) => { setAnotheUserValue(res.data) })
        .catch(() => {
            setAnotheUserValue({})
        })
}
