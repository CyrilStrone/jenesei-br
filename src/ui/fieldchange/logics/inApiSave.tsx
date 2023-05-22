import { requestUser } from "../../../App";
import { axiosInstance } from "../../functions/AxiosInstance";

export interface IinApiSaveContact {
    name: string
    link: string
}
export const inApiSaveContact = async (params: IinApiSaveContact) => {
    return axiosInstance.put(
        '/contact', {
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
        '/stack', {
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
        '/profile', {
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
export interface IinApiSaveDefault {
    value: any
    keyName: any
}
export const inApiSaveDefault = async (params: IinApiSaveDefault) => {
    console.log(params)
    return axiosInstance.put(
        '/profile', {
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
export interface IinApiSaveAvatar {
    file: any;
}
export const inApiSaveAvatar = async (params: IinApiSaveAvatar) => {
    const formData = new FormData();
    formData.append("image", params.file);
    return axiosInstance.put(
        `/profile/image`,
        formData
    )
        .then((res: any) => {
            requestUser();
            return (res.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
export interface IinApiSaveEducation {
    ed_id?: number,
    text: string,
    degree: string,
    specialization: string,
    country: string,
    state: string,
    city: string,
    name: string,
    studyStart: string,
    studyEnd: string
}
export const inApiSaveEducation = async (params: IinApiSaveEducation) => {
    return axiosInstance.put(
        '/education', {
        ed_id: params.ed_id,
        text: params.text,
        degree: params.degree,
        specialization: params.specialization,
        country: params.country,
        state: params.state,
        city: params.city,
        name: params.name,
        studyStart: params.studyStart,
        studyEnd: params.studyEnd
    })
        .then((res: any) => {
            requestUser();
            return (res.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}

export interface IinApiSaveWorkExp {
    workexp_id?: number,
    text: string,
    position: string,
    country: string,
    state: string,
    city: string,
    name: string,
    workStart: string,
    workEnd: string
}
export const inApiSaveWorkExp = async (params: IinApiSaveWorkExp) => {
    console.log(params)
    return axiosInstance.put(
        '/work-exp', {
        workexp_id: params.workexp_id,
        text: params.text,
        position: params.position,
        country: params.country,
        state: params.state,
        city: params.city,
        name: params.name,
        workStart: params.workStart,
        workEnd: params.workEnd
    })
        .then((res: any) => {
            requestUser();
            return (res.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
export interface IinApiChangePassword {
    currentPassword: string
    newPassword: string
}
export const inApiChangePassword = async (params: IinApiChangePassword) => {
    return axiosInstance.put(
        '/profile/updPass', {
        currentPassword: params.currentPassword,
        newPassword: params.newPassword
    })
        .then((res: any) => {
            return (res.data)
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}