import { $userValue, setUserSetting } from "../../functions/Hooks";
import { useEffect, useState } from "react";
import { IFieldChange } from "../organelles/FieldChange";
import { inContact } from "../logics/inContact";
import { inApiSaveContact } from "../logics/inApiSave";
import { useStore } from "effector-react";
import { inApiDeleteContact } from "../logics/inApiDelete";
import Select from "react-select";
import Delete from '../../../assets/userChange/Delete.svg'
import Arrow from '../../../assets/fieldChange/Arrow.svg'
import Setting from '../../../assets/userChange/Setting.svg'

export const FieldChangeContacts = (params: IFieldChange) => {
    const userValue = useStore($userValue);
    const [valueApi, setValueApi] = useState<any>()
    const [valueApiChoice, setValueApiChoice] = useState<any>({ value: "", label: "" })
    const [oldValue, setOldValue] = useState<any | null>(null)
    const handleApiChoiceChange = (event: any, type: any) => {
        setValueApiChoice({ value: event?.value, label: event?.value })
    };
    const handleValueApi = async () => {
        try {
            const result = await inContact();
            if (result) {
                setValueApi(result.map((e: any) => ({ value: e.name, label: e.name })))
            }
        } catch (error) {
            console.log("handleValueApi error", error)
        }
    }
    useEffect(() => {
        handleValueApi()
        if (params.value?.contact_name) {
            setValueApiChoice({ value: params.value?.contact_name, label: params.value?.contact_name })
            params.setNewValue && params.setNewValue(params.value?.link)
        }
    }, [params.value])

    useEffect(() => {
        let result = ""
        for (let i = 0; i < userValue.contacts.length; i++) {
            const object = userValue.contacts[i];
            if (object && object.contact_name && object.contact_name === valueApiChoice.value) {
                result = object.link
            }
        }
        if (params.setNewValue) {
            params.setNewValue(result)
            setOldValue(result)
        }
        params.setCheck && params.setCheck(result ? true : false)

    }, [valueApiChoice])

    const handleApiDelete = async () => {
        try {
            const result = await inApiDeleteContact({ name: valueApiChoice.value });
            if (result) {
                setUserSetting(false);
            }else{
                setUserSetting(false);
            }
        } catch (error) {
            console.log("handleApiDelete error", error)
        }

    }
    const handleApiSave = async () => {
        try {
            const result = await inApiSaveContact({ name: valueApiChoice.value, link: params.newValue });
            if (result) {
                setUserSetting(false);
            }else{
                setUserSetting(false);
            }
        } catch (error) {
            console.log("handleApiSave error", error)
        }
    };

    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); (oldValue !== params.newValue && params.newValue) && handleApiSave(); }} className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                {(oldValue) && <img src={Delete} alt="Delete" className="FieldChange__Delete" onClick={handleApiDelete} />}
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Setting} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title" >
                        {(params?.newValue && oldValue) ? "Изменить " : "Добавить "}{params.title}
                    </div>
                    <div className="FieldChange__Inputs">
                        {params.value?.contact_name && valueApiChoice.value && <Select
                            onChange={(event: any) => handleApiChoiceChange(event, "contacts")}
                            defaultValue={valueApiChoice}
                            isSearchable
                            options={valueApi}
                            className="Input__Select"
                            classNamePrefix="SelectSearchInput"
                            placeholder={<div className="SelectSearchInput__Placeholder">Выберите социальную сеть</div>}
                            noOptionsMessage={() => 'Нет данных'}
                            loadingMessage={() => 'Поиск'}
                            required

                        />}
                        {!params.value?.contact_name && <Select
                            onChange={(event: any) => handleApiChoiceChange(event, "contacts")}
                            isSearchable
                            options={valueApi}
                            className="Input__Select"
                            classNamePrefix="SelectSearchInput"
                            placeholder={<div className="SelectSearchInput__Placeholder">Выберите социальную сеть</div>}
                            noOptionsMessage={() => 'Нет данных'}
                            loadingMessage={() => 'Поиск'}
                            required

                        />}
                        {valueApiChoice.value &&
                            <input required type="url" placeholder="Вставьте ссылку" value={params.newValue} onChange={(event: any) => { params.setNewValue && params.setNewValue(event.target.value) }} />
                        }
                    </div>
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    <input type="submit" className={oldValue !== params.newValue && params.newValue ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} value="Сохранить" />
                </div>
            </form>
        </div>
    );
};
