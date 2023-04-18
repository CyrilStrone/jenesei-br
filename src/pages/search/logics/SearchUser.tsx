import { axiosInstance } from "../../../common/AxiosInstance"


export const SearchUser = async () => {
    return axiosInstance.get(
        'user')
        .then((res: any) => { return (res.data) })
        .catch(() => {
            console.log("SearchUser error")
        })
}
