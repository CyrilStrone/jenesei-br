import { axiosInstance } from "../../../ui/functions/axiosInstance"


export const SearchUser = async () => {
    return axiosInstance.get(
        '/user')
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw error;
        })
}
