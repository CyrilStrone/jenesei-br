import { axiosInstance } from "../../../Common/axiosInstance";
import { requestSearchUser } from "../Ogranoids/Search";
export interface IGetDeleteUser {
    id: number
}
export const GetDeleteUser = async (params: IGetDeleteUser) => {
    return axiosInstance.delete<{}>(
            `user/${params.id}`,
            {}
          )
        .then((res: any) => { console.log("Пользователь удален",res.data); requestSearchUser() })
}
