import { createEvent, createStore } from "effector";
import UserTopHomePicture from "../Common/Assets/Home/TopPictureHome.png"

export const $actualPage= createStore<string>("Главная")  
export const setactualPage = createEvent<string>()
$actualPage.on(setactualPage, (_,val)=> val);

export const $checkLoginPage= createStore<boolean>(false)
export const setcheckLoginPage = createEvent<boolean>()
$checkLoginPage.on(setcheckLoginPage, (_,val)=> val);

export const $userTopHomeId= createStore<number>(13123)  
export const setuserTopHomeId = createEvent<number>()
$userTopHomeId.on(setuserTopHomeId, (_,val)=> val);

export const $userTopHomeName= createStore<string>("Даня Булгаков")  
export const setuserTopHomeName = createEvent<string>()
$userTopHomeName.on(setuserTopHomeName, (_,val)=> val);

export const $userTopHomePicture = createStore<string>(UserTopHomePicture)  
export const setuserTopHomePicture = createEvent<string>()
$userTopHomePicture.on(setuserTopHomePicture, (_,val)=> val);

export const $userTopHomeJob= createStore<string>("Front End Engineer")  
export const setuserTopHomeJob = createEvent<string>()
$userTopHomeJob.on(setuserTopHomeJob, (_,val)=> val);

export const $userTopHomeStackes= createStore<string[]>(["Figma","Adobe Illustrator","Adobe Photoshop"])  
export const setuserTopHomeStackes = createEvent<string[]>()
$userTopHomeStackes.on(setuserTopHomeStackes, (_,val)=> val);

export const $userTopHomeSocialNetworks= createStore<string[]>(["Vk","Twitter","GitHub"])  
export const setuserTopHomeSocialNetworks = createEvent<string[]>()
$userTopHomeSocialNetworks.on(setuserTopHomeSocialNetworks, (_,val)=> val);

export const $userTopHomeShortDescription= createStore<string>("Очень короткое описание? Ой какое короткое описание, ужасно короткое. Ну так нельзя!")  
export const setuserTopHomeShortDescription = createEvent<string>()
$userTopHomeShortDescription.on(setuserTopHomeShortDescription, (_,val)=> val);

export const $usersPastTop= createStore<any>([])  
export const setusersPastTop = createEvent<any>()
$usersPastTop.on(setusersPastTop, (_,val)=> val);