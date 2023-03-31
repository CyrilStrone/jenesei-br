import { axiosInstance } from "../../../common/AxiosInstance"
import { setUsersPastTop } from "../../../common/HomeHooks"


export const SearchUser = async () => {
    return axiosInstance.get(
        'user')
        .then((res: any) => { setUsersPastTop(res.data) })
        .catch(() => {
            setUsersPastTop([])
        })
}
