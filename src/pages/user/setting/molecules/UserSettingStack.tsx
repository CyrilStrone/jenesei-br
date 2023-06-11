import "../styles/UserSettingStack.css";
import { useStore } from "effector-react";
import { $userValue } from "../../../../ui/functions/Hooks";
import { IFieldChange } from "../../../../ui/fieldChange/organelles/FieldChange";
import Plus from '../../../../assets/userChange/Plus.svg'

export interface IUserSettingStack {
    handleCheck: (params: IFieldChange) => void
    title: string | undefined
    keyName: string | undefined
    value: any
}

export const UserSettingStack = (params: IUserSettingStack) => {
    const userValue = useStore($userValue);
    return (
        <div className="UserSettingStack UserSetting__Blocks">
            <div className="UserSetting__Blocks__Title">
                Навыки
            </div>
            <div className="UserSetting__Blocks__List">
                {userValue?.stack?.map((e: any) =>
                    <div className="UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ value: e, title: "навык", keyName: "stack", })}>
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
                <div className="UserSetting__Blocks__List__Item__Plus UserSetting__Blocks__List__Item Setting__Card__Short" onClick={() => params.handleCheck({ title: "навык", keyName: "stack" })}>
                    <img src={Plus} alt="Plus" />
                </div>
            </div>
        </div >
    );
};
