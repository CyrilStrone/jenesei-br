import { axiosInstance } from "../../functions/axiosInstance";

export const inStack = async () => {
    return axiosInstance.get(
        '/stack')
        .then((res: any) => {
            return (res?.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}