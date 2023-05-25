import "../styles/UserSettingWorkExp.css";
import { useStore } from "effector-react";
import { $userValue } from "../../../ui/functions/Hooks";
import { IFieldChange } from "../../../ui/fieldChange/organelles/FieldChange";
import Plus from '../../../assets/userChange/Plus.svg'

export interface IUserSettingWorkExp {
    handleCheck: (params: IFieldChange) => void
    title: string | undefined
    keyName: string | undefined
    value: any
}

export const UserSettingWorkExp = (params: IUserSettingWorkExp) => {
    const userValue = useStore($userValue);
    return (
        <div className="UserSettingWorkExp UserSetting__Blocks">
            <div className="UserSetting__Blocks__Title">
                Опыт работы
            </div>
            <div className="UserSetting__Blocks__List">
                {userValue?.workExp?.map((e: any) =>
                    <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: e, title: "опыт работы", keyName: "workExp", })}>
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
                )}
                <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ title: "опыт работы", keyName: "workExp" })}>
                    <img src={Plus} alt="Plus" />
                </div>
            </div>
        </div >
    );
};
