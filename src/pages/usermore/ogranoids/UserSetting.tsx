import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { FieldChange } from "../../../ui/fieldchange/organoids/FieldChange";
import { $userSetting, $userValue, setUserSetting } from "../../../ui/functions/Hooks";
import { UserMenu } from "../molecules/UserMenu";
import "../styles/UserSetting.css";
import { apiImage } from "../../../ui/functions/AxiosInstance";
import Profile from '../../../assets/userchange/Profile.svg'
import Position from '../../../assets/userchange/Position.svg'
import Password from '../../../assets/userchange/Password.svg'
import birthDate from '../../../assets/userchange/birthDate.svg'
import Message from '../../../assets/userchange/Message.svg'
import Location from '../../../assets/userchange/Location.svg'
import Avatar from '../../../assets/userchange/Avatar.svg'
import Plus from '../../../assets/userchange/Plus.svg'
export const UserSetting = () => {
  const userValue = useStore($userValue);
  const userSetting = useStore($userSetting);
  const [title, setTitle] = useState<string | undefined>(undefined)
  interface IhandleCheck {
    title: string
  }
  const handleCheck = (params: IhandleCheck) => {
    setUserSetting(!userSetting);
    setTitle(params.title)
  };
  useEffect(() => {
    return () => {
      setUserSetting(false)
    }
  }, [])
  useEffect(() => {
    console.log("userValue", userValue)
  }, [userValue])
  return (
    userValue &&
    <div className="UserMore">
      <UserMenu />
      <div className="UserSetting">
        <div className="UserSetting__PersonalInformation UserSetting__Blocks">
          <div className="UserSetting__Blocks__Title">
            Персональная информация
          </div>
          <div className="UserSetting__Blocks__List">
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Аватар" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Аватар
              </div>
              <div className="Setting__Card__Short__Value">
                <img className="Setting__Card__Short__Value__Avatar" src={apiImage + userValue.avatarPath} alt="Avatar" />
              </div>
              <img src={Avatar} alt="Avatar" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Специальность" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Специальность
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.currentPosition ? userValue.currentPosition : "Изменить"}
              </div>
              <img src={Position} alt="Position" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Имя" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Имя
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.firstName}
              </div>
              <img src={Profile} alt="Profile" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Фамилия" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Фамилия
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.lastName}
              </div>
              <img src={Profile} alt="Profile" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Пароль" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Пароль
              </div>
              <div className="Setting__Card__Short__Value">
                Изменить пароль
              </div>
              <img src={Password} alt="Password" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Дата рождения" })}>
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
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Почта" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Почта
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.email}
              </div>
              <img src={Message} alt="Message" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Регион" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Регион
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.city ? userValue.user.city : "Указать регион"}
              </div>
              <img src={Location} alt="Location" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Логин" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Логин
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.login}
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Краткое описание" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Краткое описание
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.aboutShort ? userValue.user.aboutShort : "Написать"}
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "О себе" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                О себе
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.aboutLong ? userValue.user.aboutLong : "Написать"}
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Верификация" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Верификация
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.isVerified ? "Пройдена" : "Пройти верификацию"}
              </div>
            </div>
          </div>
        </div>
        <div className="UserSetting__Contacts UserSetting__Blocks">
          <div className="UserSetting__Blocks__Title">
            Контакты
          </div>
          <div className="UserSetting__Blocks__List">
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить контакт" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Telegram
              </div>
              <div className="Setting__Card__Short__Value">
                @cyrilstrone
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить контакт" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Facebook
              </div>
              <div className="Setting__Card__Short__Value">
                @cyrilstrone
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Добавить контакт" })}>
              <img src={Plus} alt="Plus" />
            </div>
          </div>
        </div>
      </div>
      <div className="UserSetting__Stack UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Навыки
        </div>
        <div className="UserSetting__Blocks__List">
          <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить навык" })}>
            <div className="UserSetting__Blocks__List__Item__Title">
              React
            </div>
          </div>
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Добавить навык" })}>
            <img src={Plus} alt="Plus" />
          </div>
        </div>
      </div>
      <div className="UserSetting__Education UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Образование
        </div>
        <div className="UserSetting__Blocks__List">
          <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить образование" })}>
            <div className="UserSetting__Blocks__List__Item__Title">
              СФУ
            </div>
          </div>
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Добавить образование" })}>
            <img src={Plus} alt="Plus" />
          </div>
        </div>
      </div>
      <div className="UserSetting__WorkExp UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Опыт работы
        </div>
        <div className="UserSetting__Blocks__List">
          <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить опыт работы" })}>
            <div className="UserSetting__Blocks__List__Item__Title">
              ООО АБС
            </div>
          </div>
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Добавить опыт работы" })}>
            <img src={Plus} alt="Plus" />
          </div>
        </div>
      </div>
      <div className="UserSetting__Rest UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Остальное
        </div>
        <div className="UserSetting__Blocks__List">
          <div className="UserSetting__Blocks__List__Item Setting__Card__Short">
            <div className="UserSetting__Blocks__List__Item__Title">
              Дата регистрации
            </div>
            <div className="Setting__Card__Short__Value">
              {userValue.user.createdDate && new Date(userValue.user.createdDate).toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}
            </div>
          </div>
        </div>
      </div>
      {userSetting && <FieldChange title={title} image={""} type={""} />}
    </div >
  );
};
