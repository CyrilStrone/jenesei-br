import { setUserSetting } from "../../functions/Hooks";
import { IFieldChange } from "../organelles/FieldChange";
import { inApiSaveDefault } from "../logics/inApiSave";
import { useEffect, useRef } from "react";
import Arrow from '../../../assets/fieldChange/Arrow.svg'
import Setting from '../../../assets/userChange/Setting.svg'

export const FieldChangeAboutLong = (params: IFieldChange) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const handleApiSave = async () => {
        try {
            const result = await inApiSaveDefault({ value: params.newValue, keyName: params.keyName });
            if (result) {
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
        params.setNewValue && params.setNewValue(params.value)
    }, [])
    useEffect(() => {
        if (textAreaRef && textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    }, [params.value, params.newValue]);
    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); params.check && handleApiSave() }} className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Setting} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title" >
                        {params.title}
                    </div>

                    <div className="FieldChange__Inputs">
                        <textarea ref={textAreaRef} maxLength={220} required value={params?.newValue} onChange={handleNewValue} placeholder={"Расскажите о себе"}></textarea>
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
