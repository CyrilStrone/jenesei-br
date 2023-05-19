import "../styles/UserSettingRest.css";
import { useStore } from "effector-react";
import { IFieldChange } from "../../../ui/fieldchange/organoids/FieldChange";
import { $userValue } from "../../../ui/functions/Hooks";

export interface IUserSettingRest {
    handleCheck: (params: IFieldChange) => void
    title: string | undefined
    keyName: string | undefined
    value: any
}
export const UserSettingRest = (params:IUserSettingRest) => {
    const userValue = useStore($userValue);
    return (
        <div className="UserSettingRest UserSetting__Blocks">
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
        </div >
    );
};
