import { $userValue, setUserSetting } from "../../functions/Hooks";
import { useEffect, useState } from "react";
import { inStack } from "../logics/inStack";
import { IFieldChange } from "../organoids/FieldChange";
import Arrow from '../../../assets/fieldchange/Arrow.svg'
import Setting from '../../../assets/userchange/Setting.svg'
import { inContact } from "../logics/inContact";
import { inApiSaveContact, inApiSaveStack } from "../logics/inApiSave";
import { InUser } from "../../functions/InUser";
import { useStore } from "effector-react";
import Delete from '../../../assets/userchange/Delete.svg'
import { inApiDeleteContact, inApiDeleteStack } from "../logics/inApiDeletey";
import autosize from 'autosize';

export const createArray = (start: number, end: number) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

export const FieldChangeArray = (params: IFieldChange) => {
    const userValue = useStore($userValue);
    const [valueApi, setValueApi] = useState<any>({ contacts: [], stack: [] })
    const [valueApiChoise, setValueApiChoise] = useState<any>({ contacts: "", stack: "" })
    const [check, setCheck] = useState<boolean>(false)
    const handleApiChoiseChange = (event: any, type: any) => {
        setValueApiChoise((prevState: any) => ({
            ...prevState,
            [type]: event.target.value ? event.target.value : event
        }))

    };
    const handleValueApi = async () => {
        try {
            const result = params.keyName === "contacts" ? await inContact() : params.keyName === "stack" ? await inStack() : null
            if (result && params.keyName) {
                setValueApi({ valueApi, [params.keyName]: result })
            }
        } catch (error) {
            console.log("handleValueApi", handleValueApi)
        }
    }
    useEffect(() => {
        if (((valueApi.contacts && valueApi.contacts.length == 0) || (valueApi.stack && valueApi.stack.length == 0)) && params.keyName === "contacts" || params.keyName === "stack") {
            handleValueApi()
            if (params.keyName === "contacts" && params.value && params.value.contact_name) {
                setValueApiChoise((prevState: any) => ({
                    ...prevState,
                    contacts: params.value.contact_name
                }))
                if (params.setNewValue) {
                    params.setNewValue(params.value.link)
                }
            }
            if (params.keyName === "stack" && params.value && params.value.name) {
                setValueApiChoise((prevState: any) => ({
                    ...prevState,
                    stack: params.value.name
                }))
                if (params.setNewValue) {
                    params.setNewValue(params.value.link)
                }
            }
        }
    }, [params.type])

    useEffect(() => {
        if (params.keyName === "contacts") {
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
            setCheck(result ? true : false)
        }
        if (params.keyName === "stack") {
            let result = ""
            for (let i = 0; i < userValue.stack.length; i++) {
                const object = userValue.stack[i];
                if (object && object.name && object.name === valueApiChoise.stack) {
                    result = object.level
                }
            }
            if (params.setNewValue) {
                params.setNewValue(result)
            }
            setCheck(result ? true : false)
        }
    }, [valueApiChoise])

    const handleApiDelete = async () => {
        if (params.keyName === "contacts") {
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
        if (params.keyName === "stack") {
            try {
                const result = await inApiDeleteStack({ name: valueApiChoise.stack });
                if (result) {
                    setUserSetting(false);
                    setValueApiChoise({ contacts: "", stack: "" })
                }
            } catch (error) {
                console.log("error", error)
            }
        }
    }
    const handleApiSave = async () => {
        if (params.keyName === "contacts") {
            try {
                const result = await inApiSaveContact({ name: valueApiChoise.contacts, link: params.newValue });
                if (result) {
                    setUserSetting(false);
                }
            } catch (error) {
                console.log("error", error)
            }
        }
        if (params.keyName === "stack" && params.newValue) {
            try {
                const result = await inApiSaveStack({ name: valueApiChoise.stack, level: params.newValue });
                if (result) {
                    setUserSetting(false);
                }
            } catch (error) {
                console.log("error", error)
            }
        }

    };

    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); handleApiSave(); }} className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                {check && <img src={Delete} alt="Delete" className="FieldChange__Delete" onClick={handleApiDelete} />}
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Setting} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title" >
                        {check ? "Изменить " : "Добавить "}{params.title}
                    </div>
                    <div className="FieldChange__Inputs">
                        {params.keyName === "contacts" ?
                            <>
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
                            </> : params.keyName === "stack" ?
                                <>
                                    {valueApi.stack &&
                                        <select value={valueApiChoise.stack || "Выберите навык"} onChange={(event: any) => { handleApiChoiseChange(event, "stack") }}>
                                            <option style={{ display: "none" }} value={"Выберите навык"}>{"Выберите навык"}</option>
                                            {valueApi.stack.map((e: any) =>
                                                <option value={e.name}>{e.name}</option>
                                            )}
                                        </select>
                                    }
                                    {valueApiChoise.stack &&
                                        <>
                                            <div className="FieldChange__Title">Выберите выш уровень</div>
                                            <div className="FieldChange__Inputs__Stack__Bar">
                                                {[1, 2, 3, 4, 5, 6].map((e: any) =>
                                                    <div className={params.newValue == e ? "FieldChange__Inputs__Stack__Bar__Level__Choise FieldChange__Inputs__Stack__Bar__Level" : "FieldChange__Inputs__Stack__Bar__Level"} onClick={() => { params.setNewValue && params.setNewValue(e) }}>
                                                        {e}
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    }
                                </> : params.keyName === "education" ?
                                    <>
                                        <div className="FieldChange__Inputs__Education__Blocks">
                                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                                Название учебного заведения
                                            </div>
                                            <input type="text" />
                                        </div>
                                        <div className="FieldChange__Inputs__Education__Blocks">
                                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                                Степень
                                            </div>
                                            <input type="text" />
                                        </div>
                                        <div className="FieldChange__Inputs__Education__Blocks">
                                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                                Город
                                            </div>
                                            <input type="text" placeholder={"Город, в котором вы обучались"} />
                                        </div>
                                        <div className="FieldChange__Inputs__Education__Blocks">
                                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                                Дата поступления
                                            </div>
                                            <select >
                                                {createArray(1960, 2030).map((e: any) =>
                                                    <option value={e}>{e}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="FieldChange__Inputs__Education__Blocks">
                                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                                Дата окончания
                                            </div>
                                            <div className="FieldChange__Inputs__Education__Blocks__Bar">
                                                <select >
                                                    {createArray(1960, 2030).map((e: any) =>
                                                        <option value={e}>{e}</option>
                                                    )}
                                                </select>
                                                <div className="FieldChange__Inputs__Education__Blocks__SubTitle">
                                                    Если учитесь в настоящее время — укажите год предполагаемого окончания
                                                </div>
                                            </div>
                                        </div>
                                        <div className="FieldChange__Inputs__Education__Blocks">
                                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                                Описание
                                            </div>
                                            <textarea onFocus={() => { autosize(document.querySelector('textarea')) }} placeholder={"Расскажите о своем опыте"}></textarea>
                                        </div>
                                    </> : params.keyName === "workExp" ?
                                        <>

                                        </> : null
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
