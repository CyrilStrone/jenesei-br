import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { FieldChange, IFieldChange } from "../../../ui/fieldchange/organoids/FieldChange";
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
  const [keyName, setkeyName] = useState<string | undefined>(undefined)
  const [type, setType] = useState<string | undefined>(undefined)
  const [id, setId] = useState<number | undefined>(undefined)
  const [value, setValue] = useState<string | undefined>(undefined)

  const handleCheck = (params: IFieldChange) => {
    console.log(params)
    setUserSetting(!userSetting);
    setTitle(params.title)
    setkeyName(params.keyName)
    setType(params.type)
    setId(params.id)
    setValue(params.value)
    
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
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: apiImage + userValue.avatarPath, title: "Аватар", keyName: "avatarPath", type: "img" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Аватар
              </div>
              <div className="Setting__Card__Short__Value">
                <img className="Setting__Card__Short__Value__Avatar" src={apiImage + userValue.avatarPath} alt="Avatar" />
              </div>
              <img src={Avatar} alt="Avatar" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.currentPosition, title: "Специальность", keyName: "currentPosition", type: "string" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Специальность
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.currentPosition ? userValue.currentPosition : "Изменить"}
              </div>
              <img src={Position} alt="Position" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.firstName, title: "Имя", keyName: "firstName", type: "string" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Имя
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.firstName}
              </div>
              <img src={Profile} alt="Profile" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.lastName, title: "Фамилия", keyName: "lastName", type: "string" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Фамилия
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.lastName}
              </div>
              <img src={Profile} alt="Profile" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Пароль", keyName: "password", type: "password" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Пароль
              </div>
              <div className="Setting__Card__Short__Value">
                Изменить пароль
              </div>
              <img src={Password} alt="Password" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.birthDate, title: "Дата рождения", keyName: "birthDate", type: "date" })}>
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
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.city, title: "Регион", keyName: "city", type: "city" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Регион
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.city ? userValue.user.city : "Указать регион"}
              </div>
              <img src={Location} alt="Location" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.login, title: "Логин", keyName: "login", type: "string" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Логин
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.login}
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.aboutShort, title: "Краткое описание", keyName: "aboutShort", type: "string" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Краткое описание
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.aboutShort ? userValue.user.aboutShort : "Написать"}
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.aboutLong, title: "О себе", keyName: "aboutLong", type: "textarea" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                О себе
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.aboutLong ? userValue.user.aboutLong : "Написать"}
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
        </div>
      </div>
      <div className="UserSetting__Contacts UserSetting__Blocks">
          <div className="UserSetting__Blocks__Title">
            Контакты
          </div>
          <div className="UserSetting__Blocks__List">
            {/* <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить контакт", keyName: "contacts", type: "string",id:1 })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Telegram
              </div>
              <div className="Setting__Card__Short__Value">
                @cyrilstrone
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить контакт", keyName: "contacts", type: "string",id:1 })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Facebook
              </div>
              <div className="Setting__Card__Short__Value">
                @cyrilstrone
              </div>
            </div> */}
            <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Добавить контакт", keyName: "contacts", type: "object", id: undefined })}>
              <img src={Plus} alt="Plus" />
            </div>
          </div>
        </div>
      <div className="UserSetting__Stack UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Навыки
        </div>
        <div className="UserSetting__Blocks__List">
          {/* <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить навык" })}>
            <div className="UserSetting__Blocks__List__Item__Title">
              React
            </div>
          </div> */}
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Добавить навык", keyName: "stack", type: "object", id: undefined })}>
            <img src={Plus} alt="Plus" />
          </div>
        </div>
      </div>
      <div className="UserSetting__Education UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Образование
        </div>
        <div className="UserSetting__Blocks__List">
          {/* <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить образование" })}>
            <div className="UserSetting__Blocks__List__Item__Title">
              СФУ
            </div>
          </div> */}
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Добавить образование", keyName: "education", type: "object", id: undefined })}>
            <img src={Plus} alt="Plus" />
          </div>
        </div>
      </div>
      <div className="UserSetting__WorkExp UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Опыт работы
        </div>
        <div className="UserSetting__Blocks__List">
          {/* <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Изменить опыт работы" })}>
            <div className="UserSetting__Blocks__List__Item__Title">
              ООО АБС
            </div>
          </div> */}
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Добавить опыт работы", keyName: "workExp", type: "object", id: undefined })}>
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
      {userSetting && <FieldChange keyName={keyName} title={title} type={type} id={id} value={value} />}
    </div >
  );
};
