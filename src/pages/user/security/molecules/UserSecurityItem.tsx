import { useState } from "react";
import { Checker } from "../../../../ui/checker/organelles/Checker";
import "../styles/UserSecurityItem.css";
export interface IUserSecurityItem {
  title: string
  key: string
  all: boolean
  authorizedUser: boolean
  unauthorizedUser: boolean
}
export interface IUserSecurityItemValue {
  all: boolean
  authorizedUser: boolean
  unauthorizedUser: boolean
}
export interface IChangeValueOnClick {
  type: string
}
export const UserSecurityItem = (params: IUserSecurityItem) => {
  const [value, setValue] = useState<IUserSecurityItemValue>({ all: params.all, authorizedUser: params.authorizedUser, unauthorizedUser: params.unauthorizedUser })
  const changeValueOnClick = (params: IChangeValueOnClick) => {
    setValue((prevState: any) => ({
      ...prevState,
      all: false,
      authorizedUser: false,
      unauthorizedUser: false,
      [params.type]: !prevState[params.type]

    }))
  }
  return (
    <div className="UserSecurityItem">
      <div className="UserSecurityItem__Title">
        {params.title}
      </div>
      <div className="UserSecurityItem__CheckBar">
        <div className="UserSecurityItem__CheckBar__Item">
          {
            <Checker value={value.all} onClick={() => changeValueOnClick({ type: "all" })} />
          }
        </div>
        <div className="UserSecurityItem__CheckBar__Line">

        </div>
        <div className="UserSecurityItem__CheckBar__Item">
          {
            <Checker value={value.authorizedUser} onClick={() => changeValueOnClick({ type: "authorizedUser" })} />
          }
        </div>
        <div className="UserSecurityItem__CheckBar__Line">

        </div>
        <div className="UserSecurityItem__CheckBar__Item">
          {
            <Checker value={value.unauthorizedUser} onClick={() => changeValueOnClick({ type: "unauthorizedUser" })} />
          }
        </div>
      </div>
    </div>
  );
};
