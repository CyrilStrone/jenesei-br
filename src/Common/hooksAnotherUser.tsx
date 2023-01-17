import { createEvent, createStore } from "effector";
import AnotheUserPicture from "../Common/Assets/User/UserPicture.jpg"

export const $AnotheUserId = createStore<number>(0)  
export const setAnotheUserId = createEvent<number>()
$AnotheUserId.on(setAnotheUserId, (_,val)=> val);

export const $menuBurger = createStore<boolean>(false)  
export const setmenuBurger = createEvent<boolean>()
$menuBurger.on(setmenuBurger, (_,val)=> val);

export const $AnotheUserPicture = createStore<string>(AnotheUserPicture)  
export const setAnotheUserPicture = createEvent<string>()
$AnotheUserPicture.on(setAnotheUserPicture, (_,val)=> val);

export const $AnotheUserName= createStore<string>("Даня Булгаков")  
export const setAnotheUserName = createEvent<string>()
$AnotheUserName.on(setAnotheUserName, (_,val)=> val);

export const $AnotheUserJob= createStore<string>("Front End Engineer")  
export const setAnotheUserJob = createEvent<string>()
$AnotheUserJob.on(setAnotheUserJob, (_,val)=> val);

export const $AnotheUserStackes= createStore<string[]>(["JavaScript","TypeScript","React","Webpack","HTML","CSS"])  
export const setAnotheUserStackes = createEvent<string[]>()
$AnotheUserStackes.on(setAnotheUserStackes, (_,val)=> val);

export const $AnotheUserSocialNetworks= createStore<string[]>(["Vk","Twitter","GitHub"])  
export const setAnotheUserSocialNetworks = createEvent<string[]>()
$AnotheUserSocialNetworks.on(setAnotheUserSocialNetworks, (_,val)=> val);

export const $AnotheUserShortDescription= createStore<string>("Очень короткое описание")  
export const setAnotheUserShortDescription = createEvent<string>()
$AnotheUserShortDescription.on(setAnotheUserShortDescription, (_,val)=> val);

export const $AnotheUserFullDescription= createStore<string>("Очень длинное описание")  
export const setAnotheUserFullDescription = createEvent<string>()
$AnotheUserFullDescription.on(setAnotheUserFullDescription, (_,val)=> val);