import { axiosInstance } from "../../../ui/functions/AxiosInstance"

export const InProfile = async () => {
    return axiosInstance.get(
        `/profile`)
        .then((res: any) => { 
            return res.data })
        .catch(() => {
            console.log("InProfile error")
        })
}
