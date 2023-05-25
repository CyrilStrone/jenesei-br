import "../styles/UserSettingContacts.css";
import { useStore } from "effector-react";
import { IFieldChange } from "../../../ui/fieldChange/organelles/FieldChange";
import { $userValue } from "../../../ui/functions/Hooks";
import Plus from '../../../assets/userChange/Plus.svg'

export interface IUserSettingContacts {
    handleCheck: (params: IFieldChange) => void
    title: string | undefined
    keyName: string | undefined
    value: any
}

export const UserSettingContacts = (params: IUserSettingContacts) => {
    const userValue = useStore($userValue);
    return (
        <div className="UserSettingContacts UserSetting__Blocks">
            <div className="UserSetting__Blocks__Title">
                Контакты
            </div>
            <div className="UserSetting__Blocks__List">
                {userValue?.contacts.map((e: any) =>
                        <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: e, title: "контакт", keyName: "contacts", })}>
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
                <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ title: "контакт", keyName: "contacts" })}>
                    <img src={Plus} alt="Plus" />
                </div>
            </div>
        </div >
    );
};
