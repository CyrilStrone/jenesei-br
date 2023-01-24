import { createEvent, createStore } from "effector";
import UserPicture from "../Common/Assets/User/UserPicture.jpg"

export const $userAuthorization = createStore<boolean>(true)  
export const setuserAuthorization = createEvent<boolean>()
$userAuthorization.on(setuserAuthorization, (_,val)=> val);

export const $menuBurger = createStore<boolean>(false)  
export const setmenuBurger = createEvent<boolean>()
$menuBurger.on(setmenuBurger, (_,val)=> val);

export const $userPicture = createStore<string>(UserPicture)  
export const setuserPicture = createEvent<string>()
$userPicture.on(setuserPicture, (_,val)=> val);

export const $userName= createStore<string>("Даня Булгаков")  
export const setuserName = createEvent<string>()
$userName.on(setuserName, (_,val)=> val);

export const $userJob= createStore<string>("Front End Engineer")  
export const setuserJob = createEvent<string>()
$userJob.on(setuserJob, (_,val)=> val);

export const $userStackes= createStore<string[]>(["JavaScript","TypeScript","React","Webpack","HTML","CSS"])  
export const setuserStackes = createEvent<string[]>()
$userStackes.on(setuserStackes, (_,val)=> val);

export const $userSocialNetworks= createStore<string[]>(["Vk","Twitter","GitHub"])  
export const setuserSocialNetworks = createEvent<string[]>()
$userSocialNetworks.on(setuserSocialNetworks, (_,val)=> val);

export const $userShortDescription= createStore<string>("Очень короткое описание")  
export const setuserShortDescription = createEvent<string>()
$userShortDescription.on(setuserShortDescription, (_,val)=> val);

export const $userFullDescription= createStore<string>("Очень длинное описание")  
export const setuserFullDescription = createEvent<string>()
$userFullDescription.on(setuserFullDescription, (_,val)=> val);