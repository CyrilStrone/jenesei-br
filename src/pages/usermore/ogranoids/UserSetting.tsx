import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { FieldChange } from "../../../ui/fieldchange/organoids/FieldChange";
import { $userSetting, $userValue, setUserSetting } from "../../../ui/functions/Hooks";
import { UserMenu } from "../molecules/UserMenu";
import "../styles/UserSetting.css";

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

  return (
    <div className="UserMore">
      <UserMenu />
      <div className="UserSetting">
        <div className="UserSetting__PersonalInformation UserSetting__Blocks">
          <div className="UserSetting__Blocks__Title">
            Персональная информация
          </div>
          <div className="UserSetting__Blocks__List">
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Имя" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Имя
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Фамилия" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Фамилия
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Пароль" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Пароль
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Фотография" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Фотография
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Дата рождения" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Дата рождения
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Почта" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Почта
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Регион" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Регион
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => handleCheck({ title: "Логин" })}>
              <div className="UserSetting__Blocks__List__Item__Title">
                Логин
              </div>
            </div>
          </div>
        </div>
        <div className="UserSetting__Contacts UserSetting__Blocks">
          <div className="UserSetting__Blocks__Title">
            Контакты
          </div>
          <div className="UserSetting__Blocks__List">
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short">
              <div className="UserSetting__Blocks__List__Item__Title">
                Telegram
              </div>
            </div>
            <div className="UserSetting__Blocks__List__Item Setting__Card__Short">
              <div className="UserSetting__Blocks__List__Item__Title">
                Facebook
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="UserSetting__Stack UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Навыки
        </div>
        <div className="UserSetting__Blocks__List">
          <div className="UserSetting__Blocks__List__Item Setting__Card__Short">
            <div className="UserSetting__Blocks__List__Item__Title">
              React
            </div>
          </div>
        </div>
      </div>
      <div className="UserSetting__Education UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Образование
        </div>
        <div className="UserSetting__Blocks__List">
          <div className="UserSetting__Blocks__List__Item Setting__Card__Short">
            <div className="UserSetting__Blocks__List__Item__Title">
              СФУ
            </div>
          </div>
        </div>
      </div>
      <div className="UserSetting__WorkExp UserSetting__Blocks">
        <div className="UserSetting__Blocks__Title">
          Опыт работы
        </div>
        <div className="UserSetting__Blocks__List">
          <div className="UserSetting__Blocks__List__Item Setting__Card__Short">
            <div className="UserSetting__Blocks__List__Item__Title">
              ООО АБС
            </div>
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
          </div>
        </div>
      </div>
      {userSetting && <FieldChange title={title} image={""} type={""} />}
    </div >
  );
};
