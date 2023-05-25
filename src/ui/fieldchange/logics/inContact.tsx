import { axiosInstance } from "../../functions/AxiosInstance";

export const inContact = async () => {
    return axiosInstance.get(
        '/contact')
        .then((res: any) => {
            return (res.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}