import { useStore } from "effector-react";
import { useState } from "react";
import { $userAnotherId, $userAnotherValue } from "../../../ui/functions/UserAnotherHooks";
import { getChangeUser } from "../logics/getChangeUser";
import '../styles/ChangeUser.css'
export const ChangeUser = () => {
    const UserAnotherValue = useStore($userAnotherValue);
    const UserAnotherId = useStore($userAnotherId);
    const [localUserAnotherValue, setLocalUserAnotherValue] = useState<any>(UserAnotherValue);
    const requestChangeUser = async (params: { id: number, firstName: string, lastName: string }) => {
        await getChangeUser({ id: params.id, firstName: params.firstName, lastName: params.lastName });
    }
    return (
        <div className={`ChangeUser`}>
            <div className={`ChangeUser_Contents`}>
                <div className={`ChangeUser_Contents__Title`}>
                    id: {UserAnotherId}
                </div>
                <div className={`ChangeUser_Contents__Title`}>
                    Имя
                </div>
                <input type="text" value={localUserAnotherValue.firstName} onChange={(event: any) => { setLocalUserAnotherValue({ ...localUserAnotherValue, firstName: event.target.value }) }} className={`ChangeUser_Contents__Info ChangeUser_Contents__firstName`} />
                <div className={`ChangeUser_Contents__Title`}>
                    Фамилия
                </div>
                <input type="text" value={localUserAnotherValue.lastName} onChange={(event: any) => { setLocalUserAnotherValue({ ...localUserAnotherValue, lastName: event.target.value }) }} className={`ChangeUser_Contents__Info ChangeUser_Contents__lastName`} />
            </div>
            <div className={`ChangeUser__Buttons`}>
                <div className={`ChangeUser__Save`} onClick={() => { requestChangeUser({ id: UserAnotherId, firstName: localUserAnotherValue.firstName, lastName: localUserAnotherValue.lastName }) }}>
                    Сохранить
                </div>
                <div className={`ChangeUser__Save`} onClick={() => { setLocalUserAnotherValue(UserAnotherValue) }}>
                    Отменить
                </div>
            </div>
        </div>
    );
};
