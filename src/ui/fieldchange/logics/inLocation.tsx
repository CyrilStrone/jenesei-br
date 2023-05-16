import { ApiLocation } from "../../../ui/functions/AxiosInstance"


export const inLocationCountry = async () => {
    return ApiLocation.get(
        'rest/countries?lng=ru', {
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
    return ApiLocation.get(
        'rest/regions?lng=ru', {
        headers: {
            Authorization: `Bearer OvYpl3TQBd8Mpru2SQScq-h_9lPFkW`
        },
        params: {
            countryCode: countryCode,
            first:100,
            type:"division1"
        }
    })
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
export const inLocationCity = async (countryCode:string,division1Code:string) => {
    return ApiLocation.get(
        'rest/regions?lng=ru', {
        headers: {
            Authorization: `Bearer OvYpl3TQBd8Mpru2SQScq-h_9lPFkW`
        },
        params: {
            countryCode: countryCode,
            division1Code: division1Code,
            first:100,
            type:"city"
        }
    })
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}