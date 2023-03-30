import { createEvent, createStore } from "effector";
import { GetUserAnother } from "../pages/useranother/logics/getAnotherUser";

export const $userAnotherId = createStore<number>(0)
export const setUserAnotherId = createEvent<number>()
$userAnotherId.on(setUserAnotherId, (_, val) => val);

const requestAnotherUser= async (id:number) => {
    await GetUserAnother({id:id});
}

$userAnotherId.updates.watch((id) => {
    requestAnotherUser(id)
});

export const $menuBurger = createStore<boolean>(false)
export const setMenuBurger = createEvent<boolean>()
$menuBurger.on(setMenuBurger, (_, val) => val);


export const $userAnotherName = createStore<string>("")
export const setUserAnotherName = createEvent<string>()
$userAnotherName.on(setUserAnotherName, (_, val) => val);

export interface IUserAnotherValue {
    id?: number 
    email?: string
    firstName?: string
    lastName?: string
    patronymic?: string
    birthDate?: string
    isVerified?: boolean
    createdDate?: string
}
export const $userAnotherValue = createStore<IUserAnotherValue>({
    id: undefined,
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    patronymic: undefined,
    birthDate: undefined,
    isVerified: undefined,
    createdDate: undefined
})
export const setUserAnotherValue = createEvent<any>()
$userAnotherValue.on(setUserAnotherValue, (_, val) => val);
