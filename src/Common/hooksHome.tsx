import { createEvent, createStore } from "effector";
import UserTopHomePicture from "../Common/Assets/Home/TopPictureHome.png"

export const $actualPage= createStore<string>("Home")  
export const setactualPage = createEvent<string>()
$actualPage.on(setactualPage, (_,val)=> val);

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


export const $userTopHomeSocialNetworks= createStore<string[]>(["Vk","Twitter","GitHub"])  
export const setuserTopHomeSocialNetworks = createEvent<string[]>()
$userTopHomeSocialNetworks.on(setuserTopHomeSocialNetworks, (_,val)=> val);

export const $userTopHomeShortDescription= createStore<string>("Очень короткое описание? Ой какое короткое описание, ужасно короткое. Ну так нельзя!")  
export const setuserTopHomeShortDescription = createEvent<string>()
$userTopHomeShortDescription.on(setuserTopHomeShortDescription, (_,val)=> val);

export const $usersPastTop= createStore<any>([{picture:UserTopHomePicture,name:"Даня Булгаков",job:"шмэкэндер",Stackes:["React","TS","HTML"],id:123123},{picture:UserTopHomePicture,name:"Николай Булгаков",job:"шмэкэндер",Stackes:["React","TS","HTML"],id:123173},{picture:UserTopHomePicture,name:"Бабушников Даня",job:"шмэкэндер",Stackes:["React","TS","HTML"],id:123523},{picture:UserTopHomePicture,name:"Бабушников Даня",job:"шмэкэндер",Stackes:["React","TS","HTML"],id:103523}])  
export const setusersPastTop = createEvent<any>()
$usersPastTop.on(setusersPastTop, (_,val)=> val);