import { UserSecurityItem } from "../molecules/UserSecurityItem";
import { UserSecurityItemFirst } from "../molecules/UserSecurityItemFirst";
import "../styles/UserSecurity.css";

export const UserSecurity = () => {

  return (
    <div className="UserSecurity UserSetting__Blocks">
      <div className="UserSetting__Blocks__Title">
        Моя безопасность
      </div>
      <div className="UserSetting__Blocks__ItemBar">
        <UserSecurityItemFirst view={true} />
        <UserSecurityItemFirst view={false} />
        <UserSecurityItem key={"avatar"} title={"Аватар"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar2"} title={"Специальность"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar3"} title={"Фамилия"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar4"} title={"Дата рождения"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar5"} title={"Почта"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar6"} title={"Регион"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar7"} title={"Краткое описание"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar8"} title={"О себе"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar9"} title={"Контакты"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar11"} title={"Навыки"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar12"} title={"Образование"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar13"} title={"Опыт работы"} all={true} authorizedUser={false} unauthorizedUser={false} />
        <UserSecurityItem key={"avatar14"} title={"Дата регистрации"} all={true} authorizedUser={false} unauthorizedUser={false} />
      </div>
    </div>
  );
};
