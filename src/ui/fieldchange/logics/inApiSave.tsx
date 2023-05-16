import { requestUser } from "../../../App";
import { axiosInstance } from "../../functions/AxiosInstance";

export interface IinApiSaveContact {
    name: string
    link: string
}
export const inApiSaveContact = async (params: IinApiSaveContact) => {
    return axiosInstance.put(
        'contact', {
        name: params.name,
        link: params.link
    })
        .then((res: any) => {
            requestUser();
            return (res.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}

export interface IinApiSaveStack {
    name: string
    level: number
}
export const inApiSaveStack = async (params: IinApiSaveStack) => {
    return axiosInstance.put(
        'stack', {
        name: params.name,
        level: params.level
    })
        .then((res: any) => {
            requestUser();
            return (res.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
export interface IinApiSaveLocation {
    country: string
    state: string
    city: string
}
export const inApiSaveLocation = async (params: IinApiSaveLocation) => {
    return axiosInstance.put(
        'profile', {
        country: params.country,
        state: params.state,
        city: params.city,
    })
        .then((res: any) => {
            requestUser();
            return (res.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
export interface IinApiSaveDefautl {
    value: any
    keyName: any
}
export const inApiSaveDefautl = async (params: IinApiSaveDefautl) => {
    console.log(params)
    return axiosInstance.put(
        'profile', {
        [params.keyName]: params.value
    })
        .then((res: any) => {
            requestUser();
            return (res.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}