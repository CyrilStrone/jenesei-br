import { setUserSetting } from "../../functions/Hooks";
import { IFieldChange } from "../organelles/FieldChange";
import { inApiSaveDefault } from "../logics/inApiSave";
import { useEffect } from "react";
import Arrow from '../../../assets/icon/personalInformation/arrow-left-br-full-black.svg'
import Profile from '../../../assets/icon/personalInformation/second-name-br-full-black.svg'

export const FieldChangeLastName = (params: IFieldChange) => {
    const handleApiSave = async () => {
        try {
            const result = await inApiSaveDefault({ value: params.newValue, keyName: params.keyName });
            if (result) {
                setUserSetting(false);
            } else {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("error", error)
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
        params.setNewValue && params.setNewValue(params.value)
    }, [])
    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); params.check && handleApiSave() }} className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Profile} />
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
                            type={"text"}
                            value={params?.newValue}
                            onChange={handleNewValue}
                            required maxLength={30} minLength={2}
                        />
                    </div>
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    <input type="submit" className={params.check ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} value="Сохранить" />
                </div>
            </form>
        </div>
    );
};
