import { $userValue, setUserSetting } from "../../functions/Hooks";
import { useEffect, useState } from "react";
import { IFieldChange } from "../organoids/FieldChange";
import Arrow from '../../../assets/fieldchange/Arrow.svg'
import Setting from '../../../assets/userchange/Setting.svg'
import { inContact } from "../logics/inContact";
import { inApiSaveContact } from "../logics/inApiSave";
import { useStore } from "effector-react";
import Delete from '../../../assets/userchange/Delete.svg'
import { inApiDeleteContact } from "../logics/inApiDelete";

export const createArray = (start: number, end: number) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

export const FieldChangeContacts = (params: IFieldChange) => {
    const userValue = useStore($userValue);
    const [valueApi, setValueApi] = useState<any>({ contacts: [], stack: [] })
    const [valueApiChoise, setValueApiChoise] = useState<any>({ contacts: "", stack: "" })
    const handleApiChoiseChange = (event: any, type: any) => {
        setValueApiChoise((prevState: any) => ({
            ...prevState,
            [type]: event.target.value ? event.target.value : event
        }))

    };
    const handleValueApi = async () => {
        try {
            const result = await inContact();
            if (result && params.keyName) {
                setValueApi({ valueApi, [params.keyName]: result })
            }
        } catch (error) {
            console.log("handleValueApi", handleValueApi)
        }
    }
    useEffect(() => {
        if (valueApi.contacts && valueApi.contacts.length == 0) {
            handleValueApi()
            if (params.value) {
                setValueApiChoise((prevState: any) => ({
                    ...prevState,
                    contacts: params.value.contact_name
                }))
                params.setNewValue && params.setNewValue(params.value.link)
            }
        }
    }, [params.keyName])

    useEffect(() => {
        let result = ""
        for (let i = 0; i < userValue.contacts.length; i++) {
            const object = userValue.contacts[i];
            if (object && object.contact_name && object.contact_name === valueApiChoise.contacts) {
                result = object.link
            }
        }
        if (params.setNewValue) {
            params.setNewValue(result)
        }
        params.setCheck && params.setCheck(result ? true : false)

    }, [valueApiChoise])

    const handleApiDelete = async () => {
        try {
            const result = await inApiDeleteContact({ name: valueApiChoise.contacts });
            if (result) {
                setUserSetting(false);
                setValueApiChoise({ contacts: "", stack: "" })
            }
        } catch (error) {
            console.log("error", error)
        }

    }

    const handleApiSave = async () => {
        try {
            const result = await inApiSaveContact({ name: valueApiChoise.contacts, link: params.newValue });
            if (result) {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("error", error)
        }
    };

    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); params.newValue && handleApiSave(); }} className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                {params.newValue && <img src={Delete} alt="Delete" className="FieldChange__Delete" onClick={handleApiDelete} />}
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Setting} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title" >
                        {(params.newValue) ? "Изменить " : "Добавить "}{params.title}
                    </div>
                    <div className="FieldChange__Inputs">
                        {valueApi.contacts &&
                            <select value={valueApiChoise.contacts || "Выберите социальную сеть"} onChange={(event: any) => { handleApiChoiseChange(event, "contacts") }}>
                                <option style={{ display: "none" }} value={"Выберите социальную сеть"}>{"Выберите социальную сеть"}</option>
                                {valueApi.contacts.map((e: any) =>
                                    <option value={e.name}>{e.name}</option>
                                )}
                            </select>
                        }
                        {valueApiChoise.contacts &&
                            <input required type="url" placeholder="Вставьте ссылку" value={params.newValue} onChange={(event: any) => { params.setNewValue && params.setNewValue(event.target.value) }} />
                        }
                    </div>
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    <input type="submit" className={params.newValue ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} value="Сохранить" />
                </div>
            </form>
        </div>
    );
};
