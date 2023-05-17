import { setUserSetting } from "../../functions/Hooks";
import { IFieldChange } from "../organoids/FieldChange";
import Arrow from '../../../assets/fieldchange/Arrow.svg'
import Setting from '../../../assets/userchange/Setting.svg'
import Delete from '../../../assets/userchange/Delete.svg'
import autosize from 'autosize';
import { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import { ApiLocationAnother } from "../../functions/AxiosInstance";
import { inApiSaveEducation } from "../logics/inApiSave";
import { inApiDeleteEducation } from "../logics/inApiDelete";

export const createArray = (start: number, end: number) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

export const FieldChangeEducation = (params: IFieldChange) => {
    const [valueLocation, setValueLocation] = useState<any>()
    const [check, setCheck] = useState<boolean>(false)
    const handleNewValue = (event: any, type: any) => {
        if (type == "city") {
            params.setNewValue && params.setNewValue((prevState: any) => ({
                ...prevState,
                country: event.split(',')[1].split(",")[0],
                state: event.split(',')[2],
                city: event.split(',')[0]
            }))
        } else {
            params.setNewValue && params.setNewValue((prevState: any) => ({
                ...prevState,
                [type]: event.target.value
            }))
        }
    };

    const handleApiDelete = async () => {
        try {
            const result = await inApiDeleteEducation({ id: params.value.id });
            if (result) {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("error", error)
        }
    }
    const handleApiSave = async () => {
        try {
            const result = await inApiSaveEducation(
                {
                    ed_id: params.value.id,
                    text: params.newValue.text || params.value.text,
                    degree: params.newValue.degree || params.value.degree,
                    specialization: params.newValue.specialization || params.value.specialization,
                    country: params.newValue.country || params.value.country,
                    state: params.newValue.state || params.value.state,
                    city: params.newValue.city || params.value.city,
                    name: params.newValue.name || params.value.name,
                    studyStart: params.newValue.studyStart || params.value.studyStart,
                    studyEnd: params.newValue.studyEnd || params.value.studyEnd
                }
            );
            if (result) {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("error", error)
        }
    };

    function getOptions(query: string): any {
        return new Promise((resolve, reject) => {
            ApiLocationAnother.get(
                '/locations/v1/cities/search/', {
                params: {
                    apikey: "h8kFz4u1VfjQOAoHHHPqiJfI29E2xUg7",
                    q: query,
                    language: "ru-ru",
                    type: "city"
                }
            })
                .then((res: any) => {
                    if (res.data) {
                        if (check) {
                            params.setNewValue && params.setNewValue((prevState: any) => ({
                                ...prevState,
                                city: ""
                            }))
                            params.setValue && params.setValue((prevState: any) => ({
                                ...prevState,
                                city: ""
                            }))
                        } else {
                            setCheck(true)
                        }
                        setValueLocation({ ...valueLocation, city: res.data.map((e: any) => ({ value: `${e.LocalizedName},${e.Country.LocalizedName},${e.AdministrativeArea.LocalizedName}`, name: `${e.LocalizedName}, ${e.Country.LocalizedName}, ${e.AdministrativeArea.LocalizedName}` })) })
                    }
                })
                .catch(reject);
        });
    }
    useEffect(() => {
        if (params.value && params.value.city) {
            getOptions(params.value.city)
        } else {
            setCheck(true)
        }
    }, [params.value])
    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); (params.value && params.value.id && params.check) ? handleApiSave() : (params.newValue && params.newValue.text && params.newValue.degree && params.newValue.specialization && params.newValue.country && params.newValue.state && params.newValue.city && params.newValue.name && params.newValue.studyStart && params.newValue.studyEnd && handleApiSave()) }} className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                {params.value && params.value.id && <img src={Delete} alt="Delete" className="FieldChange__Delete" onClick={handleApiDelete} />}
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Setting} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title" >
                        {params.value && params.value.id ? "Изменить " : "Добавить "}{params.title}
                    </div>
                    <div className="FieldChange__Inputs">
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Название учебного заведения
                            </div>
                            <input required minLength={2} type="text" value={!params.newValue ? (params.value && params.value.name && params.value.name) : params.newValue.name} onChange={(event: any) => handleNewValue(event, "name")} />
                        </div>
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Степень
                            </div>
                            <input required minLength={2} type="text" value={!params.newValue ? (params.value && params.value.degree && params.value.degree) : params.newValue.degree} onChange={(event: any) => handleNewValue(event, "degree")} />
                        </div>
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Направление
                            </div>
                            <input required minLength={2} type="text" value={!params.newValue ? (params.value && params.value.specialization && params.value.specialization) : params.newValue.specialization} onChange={(event: any) => handleNewValue(event, "specialization")} />
                        </div>
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Город
                            </div>
                            <SelectSearch
                                className={(params.value && params.value.city) ? (" FieldChange__Inputs__Education__Blocks__City__Disabled ") : ((params.newValue && params.newValue.city) ? " FieldChange__Inputs__Education__Blocks__City__Disabled " : " ")}
                                value={(params.newValue && params.newValue.city) ? (`${params.newValue.city},${params.newValue.country},${params.newValue.state}`) : (params.value && params.value.city && `${params.value.city},${params.value.country},${params.value.state}`)}
                                search debounce={2000} getOptions={getOptions} options={valueLocation && valueLocation.city && valueLocation.city}
                                placeholder="Найдите свой город" onChange={(event: any) => handleNewValue(event, "city")}
                            />
                        </div>
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Дата поступления
                            </div>
                            <select required value={(!params.newValue ? (params.value ? new Date(params.value.studyStart).getFullYear() : 2010) : params.newValue.studyStart)} onChange={(event: any) => { handleNewValue(event, "studyStart") }}>
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
                                <select required value={(!params.newValue ? (params.value ? new Date(params.value.studyEnd).getFullYear() : 2020) : params.newValue.studyEnd)} onChange={(event: any) => { handleNewValue(event, "studyEnd") }}>
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
                            <textarea required minLength={2} onFocus={() => { autosize(document.querySelector('textarea')) }} placeholder={"Расскажите о своем опыте"} value={!params.newValue ? (params.value && params.value.text && params.value.text) : params.newValue.text} onChange={(event: any) => handleNewValue(event, "text")} />
                        </div>
                    </div>
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    <input type="submit" className={(params.value && params.value.id && params.check) ? "FieldChange__Button__Group__Save" : ((params.newValue && params.newValue.text && params.newValue.degree && params.newValue.specialization && params.newValue.country && params.newValue.state && params.newValue.city && params.newValue.name && params.newValue.studyStart && params.newValue.studyEnd) ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel")} value="Сохранить" />
                </div>
            </form>
        </div>
    );
};
