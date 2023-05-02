import { createEvent, createStore } from "effector";
import ProfileDefault from '../../assets/header/DefaultAvatar.svg'

export interface IUserValue {
  firstName: string
  lastName: string
  mail: string
  avatar: string
}
export const $userValue = createStore<IUserValue>({ firstName: "Даня", lastName: "Булгаков", mail: "danya@gmail.com", avatar: ProfileDefault })
export const setUserValue = createEvent<IUserValue>()
$userValue.on(setUserValue, (_, val) => val);

