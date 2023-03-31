import { createEvent, createStore } from "effector";
import UserTopHomePicture from "../common/assets/home/TopPictureHome.png"

export const $actualPage= createStore<string>("Главная")  
export const setActualPage = createEvent<string>()
$actualPage.on(setActualPage, (_,val)=> val);

export const $checkLoginPage= createStore<boolean>(false)
export const setcheckLoginPage = createEvent<boolean>()
$checkLoginPage.on(setcheckLoginPage, (_,val)=> val);

export const $userTopHomeId= createStore<number>(13123)  
export const setUserTopHomeId = createEvent<number>()
$userTopHomeId.on(setUserTopHomeId, (_,val)=> val);

export const $userTopHomeName= createStore<string>("Даня Булгаков")  
export const setUserTopHomeName = createEvent<string>()
$userTopHomeName.on(setUserTopHomeName, (_,val)=> val);

export const $userTopHomePicture = createStore<string>(UserTopHomePicture)  
export const setUserTopHomePicture = createEvent<string>()
$userTopHomePicture.on(setUserTopHomePicture, (_,val)=> val);

export const $userTopHomeJob= createStore<string>("Front End Engineer")  
export const setUserTopHomeJob = createEvent<string>()
$userTopHomeJob.on(setUserTopHomeJob, (_,val)=> val);

export const $userTopHomeStackes= createStore<string[]>(["Figma","Adobe Illustrator","Adobe Photoshop"])  
export const setUserTopHomeStackes = createEvent<string[]>()
$userTopHomeStackes.on(setUserTopHomeStackes, (_,val)=> val);

export const $userTopHomeSocialNetworks= createStore<string[]>(["Vk","Twitter","GitHub"])  
export const setUserTopHomeSocialNetworks = createEvent<string[]>()
$userTopHomeSocialNetworks.on(setUserTopHomeSocialNetworks, (_,val)=> val);

export const $userTopHomeShortDescription= createStore<string>("Очень короткое описание? Ой какое короткое описание, ужасно короткое. Ну так нельзя!")  
export const setUserTopHomeShortDescription = createEvent<string>()
$userTopHomeShortDescription.on(setUserTopHomeShortDescription, (_,val)=> val);

export const $usersPastTop= createStore<any>([])  
export const setUsersPastTop = createEvent<any>()
$usersPastTop.on(setUsersPastTop, (_,val)=> val);