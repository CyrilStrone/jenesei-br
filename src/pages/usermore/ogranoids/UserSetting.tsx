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
  const [value, setValue] = useState<string | undefined>(undefined)

  const handleCheck = (params: IFieldChange) => {
    console.log(params)
    setUserSetting(!userSetting);
    setTitle(params.title)
    setkeyName(params.keyName)
    setValue(params.value)

  };
  useEffect(() => {
    return () => {
      setUserSetting(false)
    }
  }, [])
  //TODO:Убирать плюс если максимум
  //TODO:textarea странно поведение
  //TODO:Меньшая дата больше большей
  //TODO:навыки и контакты плюс всегда горит

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
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: apiImage + userValue.avatarPath, title: "Аватар", keyName: "avatarPath" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Аватар
              </div>
              <div className="Setting__Card__Short__Value">
                <img className="Setting__Card__Short__Value__Avatar" src={apiImage + userValue.avatarPath} alt="Avatar" />
              </div>
              <img src={Avatar} alt="Avatar" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.currentPosition, title: "Специальность", keyName: "currentPosition" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Специальность
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.currentPosition ? userValue.currentPosition : "Изменить"}
              </div>
              <img src={Position} alt="Position" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.firstName, title: "Имя", keyName: "firstName" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Имя
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.firstName}
              </div>
              <img src={Profile} alt="Profile" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.lastName, title: "Фамилия", keyName: "lastName" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Фамилия
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.lastName}
              </div>
              <img src={Profile} alt="Profile" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Пароль", keyName: "password" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Пароль
              </div>
              <div className="Setting__Card__Short__Value">
                Изменить пароль
              </div>
              <img src={Password} alt="Password" className="Setting__Card__Short__Image" />
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.birthDate, title: "Дата рождения", keyName: "birthDate" })}>
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
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.city, title: "Регион", keyName: "location" })}>
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
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.login, title: "Логин", keyName: "login" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Логин
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.login}
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.aboutShort, title: "Краткое описание", keyName: "aboutShort" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Краткое описание
              </div>
              <div className="Setting__Card__Short__Value">
                {userValue.user.aboutShort ? userValue.user.aboutShort : "Написать"}
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: userValue.user.aboutLong, title: "О себе", keyName: "aboutLong" })}>
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
          {userValue.contacts && userValue.contacts.length !== 0 &&
            userValue.contacts.map((e: any) =>
              <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: e, title: "контакт", keyName: "contacts", })}>
                <div className="UserSetting__Blocks__List__Item__Title">
                  {e.contact_name}
                </div>
                <div className="Setting__Card__Short__Value">
                  <div className="Setting__Card__Short__Value__Link" onClick={(event: any) => { event.stopPropagation();; window.open(e.link, '_blank', "noreferrer") }}>
                    {"@" + (e.link).split('/')[(e.link).split('/').length - 1]}
                  </div>
                </div>
              </div>
            )
          }
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "контакт", keyName: "contacts" })}>
            <img src={Plus} alt="Plus" />
          </div>
        </div>
      </div>
      <div className="UserSetting__Stack UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Навыки
        </div>
        <div className="UserSetting__Blocks__List">
          {userValue.stack && userValue.stack.length !== 0 &&
            userValue.stack.map((e: any) =>
              <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: e, title: "навык", keyName: "stack", })}>
                <div className="UserSetting__Blocks__List__Item__Title">
                  {e.name}
                </div>
                <div className="Setting__Card__Short__Value">
                  {e.level === 1 ?
                    "Junior" :
                    e.level === 2 ?
                      "Junior Plus" :
                      e.level === 3 ?
                        "Middle" :
                        e.level === 4 ?
                          "Middle Plus" :
                          e.level === 5 ?
                            "Senior" :
                            e.level === 6 ?
                              "Senior Plus" : null
                  }
                </div>
              </div>
            )
          }
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "навык", keyName: "stack" })}>
            <img src={Plus} alt="Plus" />
          </div>
        </div>
      </div>
      <div className="UserSetting__Education UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Образование
        </div>
        <div className="UserSetting__Blocks__List">
          {userValue.education && userValue.education.length !== 0 &&
            userValue.education.map((e: any) =>
              <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: e, title: "образование", keyName: "education", })}>
                <div className="UserSetting__Blocks__List__Item__Title">
                  {e.name}
                </div>
                <div className="Setting__Card__Short__Value">
                  {e.position}
                </div>
                <div className="Setting__Card__Short__Value">
                  {new Date(e.studyStart).getFullYear()}{" - " + new Date(e.studyEnd).getFullYear()}
                </div>
              </div>
            )
          }
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "образование", keyName: "education" })}>
            <img src={Plus} alt="Plus" />
          </div>
        </div>
      </div>
      <div className="UserSetting__WorkExp UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Опыт работы
        </div>
        <div className="UserSetting__Blocks__List">
        {userValue.workExp && userValue.workExp.length !== 0 &&
            userValue.workExp.map((e: any) =>
              <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ value: e, title: "опыт работы", keyName: "workExp", })}>
                <div className="UserSetting__Blocks__List__Item__Title">
                  {e.name}
                </div>
                <div className="Setting__Card__Short__Value">
                  {e.position}
                </div>
                <div className="Setting__Card__Short__Value">
                  {new Date(e.workStart).getFullYear()}{e.workEnd && (" - " + new Date(e.workEnd).getFullYear())}
                </div>
              </div>
            )
          }
          <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "опыт работы", keyName: "workExp" })}>
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
      {userSetting && <FieldChange keyName={keyName} title={title} value={value} setValue={setValue}/>}
    </div >
  );
};
