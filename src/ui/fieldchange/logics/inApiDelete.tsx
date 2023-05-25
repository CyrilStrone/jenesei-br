import { requestUser } from "../../../App";
import { axiosInstance } from "../../functions/AxiosInstance";

export interface IinApiDeleteContact {
    name: string
}
export const inApiDeleteContact = async (params: IinApiDeleteContact) => {
    return axiosInstance.delete(
        '/contact', {
        data: {
            "field_name": params.name,
        }
    })
        .then((res: any) => {
            requestUser();
            return res.data
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}

export interface IinApiDeleteStack {
    name: string
}
export const inApiDeleteStack = async (params: IinApiDeleteStack) => {
    return axiosInstance.delete(
        '/stack', {
        data: {
            "field_name": params.name,
        }
    })
        .then((res: any) => {
            requestUser();
            return res.data
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}

export interface IinApiDeleteEducation {
    id: string
}
export const inApiDeleteEducation = async (params: IinApiDeleteEducation) => {
    return axiosInstance.delete(
        '/education', {
        data: {
            "field_id": params.id,
        }
    })
        .then((res: any) => {
            requestUser();
            return res.data
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}

export interface IinApiDeleteWorkExpn {
    id: string
}
export const inApiDeleteWorkExp = async (params: IinApiDeleteWorkExpn) => {
    return axiosInstance.delete(
        '/work-exp', {
        data: {
            "field_id": params.id,
        }
    })
        .then((res: any) => {
            requestUser();
            return res.data
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}