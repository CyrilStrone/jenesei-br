import { axiosInstance } from "../../../ui/functions/AxiosInstance";

export const InAnotherUser = async (login: string) => {
    return axiosInstance.get(
        `/user/${login}`)
        .then((res: any) => {
            return res.data
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}