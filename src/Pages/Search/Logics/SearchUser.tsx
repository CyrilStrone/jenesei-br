import { setusersPastTop } from "../../../Common/hooksHome";
import { axiosInstance } from "../../../Common/axiosInstance";

export const SearchUser = async () => {
    return axiosInstance.get(
        'user')
        .then((res: any) => { setusersPastTop(res.data) })
        .catch(() => {
            setusersPastTop([])
        })
}
