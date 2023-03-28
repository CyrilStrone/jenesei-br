import { useStore } from "effector-react";
import React, { useState } from "react";
import { $AnotheUserId, $anotheUserValue } from "../../../Common/hooksAnotherUser";
import { getChangeUser } from "../Logics/getChangeUser";
import '../Styles/ChangeUser.css'
export const ChangeUser = () => {
    const anotheUserValue = useStore($anotheUserValue);
    const AnotheUserId = useStore($AnotheUserId);
    const [localAnotheUserValue, setLocalAnotheUserValue] = useState(anotheUserValue);
    const requestChangeUser = async (params: { id: number, firstName: string, lastName: string }) => {
        await getChangeUser({ id: params.id, firstName: params.firstName, lastName: params.lastName });
    }
    return (
        <div className={`ChangeUser`}>
            <div className={`ChangeUser_Contents`}>
                <div className={`ChangeUser_Contents__Title`}>
                    id: {AnotheUserId}
                </div>
                <div className={`ChangeUser_Contents__Title`}>
                    Имя
                </div>
                <input type="text" value={localAnotheUserValue.firstName} onChange={(event: any) => { setLocalAnotheUserValue({ ...localAnotheUserValue, firstName: event.target.value }) }} className={`ChangeUser_Contents__Info ChangeUser_Contents__firstName`} />
                <div className={`ChangeUser_Contents__Title`}>
                    Фамилия
                </div>
                <input type="text" value={localAnotheUserValue.lastName} onChange={(event: any) => { setLocalAnotheUserValue({ ...localAnotheUserValue, lastName: event.target.value }) }} className={`ChangeUser_Contents__Info ChangeUser_Contents__lastName`} />
            </div>
            <div className={`ChangeUser__Buttons`}>
                <div className={`ChangeUser__Save`} onClick={() => { requestChangeUser({ id: AnotheUserId, firstName: localAnotheUserValue.firstName, lastName: localAnotheUserValue.lastName }) }}>
                    Сохранить
                </div>
                <div className={`ChangeUser__Save`} onClick={() => { setLocalAnotheUserValue(anotheUserValue) }}>
                    Отменить
                </div>
            </div>
        </div>
    );
};
