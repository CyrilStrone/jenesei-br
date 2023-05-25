import { axiosInstance } from "../../../ui/functions/AxiosInstance";

export const InSubPost = async (userId: string) => {
    return axiosInstance.post(
        `/subs/${userId}`)
        .then((res: any) => {
            return res.data
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}

export const InSubDelete = async (userId: string) => {
    return axiosInstance.delete(
        `/subs/${userId}`)
        .then((res: any) => {
            return res.data
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}