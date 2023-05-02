import { axiosInstance } from "../../../ui/functions/AxiosInstance"

export const InProfile = async () => {
    return axiosInstance.get(
        `/profile`)
        .then((res: any) => {
            return res.data
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
