import { useStore } from "effector-react";
import { useState } from "react";
import { $userAnotherId, $userAnotherValue } from "../../../ui/functions/UserAnotherHooks";
import { getUserChange } from "../logics/getUserChange";
import '../styles/UserChange.css'
export const UserChange = () => {
    const UserAnotherValue = useStore($userAnotherValue);
    const UserAnotherId = useStore($userAnotherId);
    const [localUserAnotherValue, setLocalUserAnotherValue] = useState<any>(UserAnotherValue);
    const requestUserChange = async (params: { id: number, firstName: string, lastName: string }) => {
        await getUserChange({ id: params.id, firstName: params.firstName, lastName: params.lastName });
    }
    return (
        <div className={`UserChange`}>
            <div className={`UserChange_Contents`}>
                <div className={`UserChange_Contents__Title`}>
                    id: {UserAnotherId}
                </div>
                <div className={`UserChange_Contents__Title`}>
                    Имя
                </div>
                <input type="text" value={localUserAnotherValue.firstName} onChange={(event: any) => { setLocalUserAnotherValue({ ...localUserAnotherValue, firstName: event.target.value }) }} className={`UserChange_Contents__Info UserChange_Contents__firstName`} />
                <div className={`UserChange_Contents__Title`}>
                    Фамилия
                </div>
                <input type="text" value={localUserAnotherValue.lastName} onChange={(event: any) => { setLocalUserAnotherValue({ ...localUserAnotherValue, lastName: event.target.value }) }} className={`UserChange_Contents__Info UserChange_Contents__lastName`} />
            </div>
            <div className={`UserChange__Buttons`}>
                <div className={`UserChange__Save`} onClick={() => { requestUserChange({ id: UserAnotherId, firstName: localUserAnotherValue.firstName, lastName: localUserAnotherValue.lastName }) }}>
                    Сохранить
                </div>
                <div className={`UserChange__Save`} onClick={() => { setLocalUserAnotherValue(UserAnotherValue) }}>
                    Отменить
                </div>
            </div>
        </div>
    );
};
