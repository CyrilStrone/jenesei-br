import axios from "axios";
import { ApiLocation, ApiLocationAnother } from "../../../ui/functions/AxiosInstance"


export const inLocationCountry = async () => {
    return await axios
        .get(
            `${ApiLocation}/rest/countries?lng=ru`, {
            headers: {
                Authorization: `Bearer OvYpl3TQBd8Mpru2SQScq-h_9lPFkW`
            }
        })
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
export const inLocationState = async (countryCode: string) => {
    return await axios
        .get(
            `${ApiLocation}/rest/regions?lng=ru`, {
            headers: {
                Authorization: `Bearer OvYpl3TQBd8Mpru2SQScq-h_9lPFkW`
            },
            params: {
                countryCode: countryCode,
                first: 100,
                type: "division1"
            }
        })
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
export const inLocationCity = async (countryCode: string, division1Code: string) => {
    return await axios
        .get(
            `${ApiLocation}/rest/regions?lng=ru`, {
            headers: {
                Authorization: `Bearer OvYpl3TQBd8Mpru2SQScq-h_9lPFkW`
            },
            params: {
                countryCode: countryCode,
                division1Code: division1Code,
                first: 100,
                type: "city"
            }
        })
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}

export const inLocationCityAnother = async (value: string) => {
    return await axios
        .get(
            `${ApiLocationAnother}/locations/v1/cities/search/`, {
            params: {
                apikey: "h8kFz4u1VfjQOAoHHHPqiJfI29E2xUg7",
                q: value,
                language: "ru-ru",
            }
        })
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}