import { createEvent, createStore } from "effector";
import { GetAnotherUser } from "../Pages/AnotherUser/Logics/getAnotherUser";

export const $AnotheUserId = createStore<number>(0)
export const setAnotheUserId = createEvent<number>()
$AnotheUserId.on(setAnotheUserId, (_, val) => val);

const requestAnotherUser= async (id:number) => {
    await GetAnotherUser({id:id});
}

$AnotheUserId.updates.watch((id) => {
    requestAnotherUser(id)
});

export const $menuBurger = createStore<boolean>(false)
export const setmenuBurger = createEvent<boolean>()
$menuBurger.on(setmenuBurger, (_, val) => val);


export const $anotheUserName = createStore<string>("")
export const setAnotheUserName = createEvent<string>()
$anotheUserName.on(setAnotheUserName, (_, val) => val);

export interface IAnotheUserValue {
    id: number
    email: string
    firstName: string
    lastName: string
    patronymic: string
    birthDate: string
    isVerified: boolean
    createdDate: string
}
export const $anotheUserValue = createStore<IAnotheUserValue>({
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    patronymic: null,
    birthDate: null,
    isVerified: null,
    createdDate: null
})
export const setAnotheUserValue = createEvent<any>()
$anotheUserValue.on(setAnotheUserValue, (_, val) => val);
