import { axiosInstance } from "../../../ui/functions/AxiosInstance"


export const inLocationCountry = async () => {
    return axiosInstance.get(
        'user')
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
export const inLocationState = async () => {
    return axiosInstance.get(
        'user')
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
export const inLocationCity = async () => {
    return axiosInstance.get(
        'user')
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}