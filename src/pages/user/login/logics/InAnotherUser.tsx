import { axiosInstance } from "../../../../ui/functions/axiosInstance";

export const InAnotherUser = async (login: string) => {
    return axiosInstance.get(
        `/profile/${login}`)
        .then((res: any) => {
            return res.data
        })
        .catch((error) => {
            throw error;
        })
}