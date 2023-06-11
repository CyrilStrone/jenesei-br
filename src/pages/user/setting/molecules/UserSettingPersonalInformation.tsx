import "../styles/UserSettingPersonalInformation.css";
import { useStore } from "effector-react";
import { $userValue } from "../../../../ui/functions/Hooks";
import { IFieldChange } from "../../../../ui/fieldChange/organelles/FieldChange";
import Profile from '../../../../assets/userChange/Profile.svg'
import Position from '../../../../assets/userChange/Position.svg'
import Password from '../../../../assets/userChange/Password.svg'
import birthDate from '../../../../assets/userChange/birthDate.svg'
import Message from '../../../../assets/userChange/Message.svg'
import Location from '../../../../assets/userChange/Location.svg'
import Avatar from '../../../../assets/userChange/Avatar.svg'
import { ApiImage } from "../../../../ui/functions/AxiosInstance";

export interface IUserSettingPersonalInformation {
    handleCheck: (params: IFieldChange) => void
    title: string | undefined
    keyName: string | undefined
    value: any
}

export const UserSettingPersonalInformation = (params: IUserSettingPersonalInformation) => {
    const userValue = useStore($userValue);
    return (
        <div className="UserSettingPersonalInformation UserSetting__Blocks">
            <div className="UserSetting__Blocks__Title">
                Персональная информация
            </div>
            <div className="UserSetting__Blocks__List">
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: ApiImage + userValue.avatarPath, title: "Аватар", keyName: "avatarPath" })}>
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Аватар
                    </div>
                    <div className="Setting__Card__Short__Value">
                        <img className="Setting__Card__Short__Value__Avatar" src={ApiImage + userValue.avatarPath} alt="Avatar" />
                    </div>
                    <img src={Avatar} alt="Avatar" className="Setting__Card__Short__Image" />
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: userValue.currentPosition || "", title: "Специальность", keyName: "currentPosition" })}>
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Специальность
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.currentPosition ? userValue.currentPosition : "Изменить"}
                    </div>
                    <img src={Position} alt="Position" className="Setting__Card__Short__Image" />
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: userValue.user.firstName, title: "Имя", keyName: "firstName" })}>
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Имя
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.user.firstName}
                    </div>
                    <img src={Profile} alt="Profile" className="Setting__Card__Short__Image" />
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: userValue.user.lastName, title: "Фамилия", keyName: "lastName" })}>
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Фамилия
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.user.lastName}
                    </div>
                    <img src={Profile} alt="Profile" className="Setting__Card__Short__Image" />
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ title: "Пароль", keyName: "password" })}>
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Пароль
                    </div>
                    <div className="Setting__Card__Short__Value">
                        Изменить пароль
                    </div>
                    <img src={Password} alt="Password" className="Setting__Card__Short__Image" />
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: userValue.user.birthDate, title: "Дата рождения", keyName: "birthDate" })}>
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Дата рождения
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.user.birthDate && new Date(userValue.user.birthDate).toLocaleDateString('en-US', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        })}
                    </div>
                    <img src={birthDate} alt="birthDate" className="Setting__Card__Short__Image" />
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" >
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Почта
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.user.email}
                    </div>
                    <img src={Message} alt="Message" className="Setting__Card__Short__Image" />
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: userValue.user.city, title: "Регион", keyName: "location" })}>
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Регион
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.user.country && <div>{userValue.user.country}</div>}
                        {userValue.user.state && <div>{userValue.user.state}</div>}
                        {userValue.user.city ? <div>{userValue.user.city}</div> : "Указать регион"}
                    </div>
                    <img src={Location} alt="Location" className="Setting__Card__Short__Image" />
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: userValue.user.aboutShort, title: "Краткое описание", keyName: "aboutShort" })}>
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Краткое описание
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.user.aboutShort ? userValue.user.aboutShort : "Написать"}
                    </div>
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" >
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Верификация
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.isVerified ? "Пройдена" : "Пройти верификацию"}
                    </div>
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short UserSettingPersonalInformation__ItemAboutLong" onClick={() => params.handleCheck({ value: userValue.user.aboutLong, title: "О себе", keyName: "aboutLong" })}>
                    <div className="UserSetting__Blocks__List__Item__Title">
                        О себе
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.user.aboutLong ? userValue.user.aboutLong : "Написать"}
                    </div>
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short">
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Логин
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.user.login}
                    </div>
                </div>
                <div className="UserSetting__Blocks__List__Item Setting__Card__Short" >
                    <div className="UserSetting__Blocks__List__Item__Title">
                        Верификация
                    </div>
                    <div className="Setting__Card__Short__Value">
                        {userValue.isVerified ? "Пройдена" : "Пройти верификацию"}
                    </div>
                </div>
            </div>
        </div >
    );
};
