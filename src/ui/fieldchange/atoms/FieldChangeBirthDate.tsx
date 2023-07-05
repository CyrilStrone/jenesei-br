import { setUserSetting } from "../../functions/Hooks";
import { IFieldChange } from "../organelles/FieldChange";
import { useEffect, useState } from "react";
import { inApiSaveDefault } from "../logics/inApiSave";
import Arrow from '../../../assets/settings/leftArrow.svg'
import birthDate from '../../../assets/userChange/birthDate.svg'

export const FieldChangeBirthDate = (params: IFieldChange) => {
    const [check, setCheck] = useState<boolean>(false)

    const handleApiSave = async () => {
        try {
            const result = await inApiSaveDefault({ value: params.newValue, keyName: params.keyName });
            if (result) {
                setUserSetting(false);
            } else {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("handleApiSave error", error)
        }
    }
    const handleNewValue = (event: any) => {
        if (params.keyName && params.setNewValue) {
            params.setNewValue(
                event.target.value
            )
        }
    }

    useEffect(() => {
        if (params.newValue && (params.newValue !== new Date(params.value).toISOString().split('T')[0])) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }, [params.newValue, params.value])

    useEffect(() => {
        params.setNewValue && params.setNewValue(params.value)
    }, [])
    return (
        <div className="FieldChange__General" >
            <div className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={birthDate} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title" >
                        {params.title}
                    </div>
                    <div className="FieldChange__Inputs">
                        <input
                            type="date"
                            max={new Date().toISOString().split('T')[0]} min="1776-06-30"
                            value={params.newValue && new Date(params.newValue).toISOString().split('T')[0]}
                            onChange={handleNewValue}
                        />
                    </div>
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    <div className={check ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} onClick={() => { check && handleApiSave() }}>
                        Сохранить
                    </div>
                </div>
            </div>
        </div>
    );
};
