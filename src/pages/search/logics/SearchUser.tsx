import { axiosInstance } from "../../../ui/functions/AxiosInstance"


export const SearchUser = async () => {
    return axiosInstance.get(
        'user')
        .then((res: any) => { return (res.data) })
        .catch(() => {
            console.log("SearchUser error")
        })
}
