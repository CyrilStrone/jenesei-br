import { axiosInstance } from "../../../scommon/AxiosInstance"
import { setUsersPastTop } from "../../../scommon/HomeHooks"


export const SearchUser = async () => {
    return axiosInstance.get(
        'user')
        .then((res: any) => { setUsersPastTop(res.data) })
        .catch(() => {
            setUsersPastTop([])
        })
}
