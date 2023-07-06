import { useEffect, useRef, useState } from "react";
import { ApiLocationAnother } from "../../functions/AxiosInstance";
import { inApiSaveEducation } from "../logics/inApiSave";
import { inApiDeleteEducation } from "../logics/inApiDelete";
import { setUserSetting } from "../../functions/Hooks";
import { IFieldChange } from "../organelles/FieldChange";
import AsyncSelect from 'react-select/async';
import Arrow from '../../../assets/icon/personalInformation/arrow-left-br-full-black.svg'
import Setting from '../../../assets/icon/personalInformation/settings-br-full-black.svg'
import Delete from '../../../assets/icon/personalInformation/delete-br-full-black.svg'
import axios from "axios";

export const createArray = (start: number, end: number) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

export const FieldChangeEducation = (params: IFieldChange) => {
    const [firstLocation, setFirstLocation] = useState<any>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleNewValue = (event: any, type: any) => {
        if (type === "city") {
            params.setNewValue && params.setNewValue((prevState: any) => ({
                ...prevState,
                country: event?.value && (event.value).split(',')[1].split(",")[0],
                state: event?.value && (event.value).split(',')[2],
                city: event?.value && (event.value).split(',')[0]
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
            } else {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("handleApiDelete error", error)
        }
    }

    const handleApiSave = async () => {
        try {
            const result = await inApiSaveEducation(
                {
                    ed_id: params.newValue?.id,
                    text: params.newValue?.text,
                    degree: params.newValue?.degree,
                    specialization: params.newValue?.specialization,
                    country: params.newValue?.country,
                    state: params.newValue?.state,
                    city: params.newValue?.city,
                    name: params.newValue?.name,
                    studyStart: params.newValue?.studyStart,
                    studyEnd: params.newValue?.studyEnd
                }
            );
            if (result) {
                setUserSetting(false);
            } else {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("handleApiSave error", error)
        }
    };

    const loadOptions = (query: string): any => {
        return new Promise(async (resolve, reject) => {
            return await axios
                .get(`${ApiLocationAnother}/locations/v1/cities/search/`, {
                    params: {
                        apikey: "h8kFz4u1VfjQOAoHHHPqiJfI29E2xUg7",
                        q: query,
                        language: "ru-ru",
                        type: "city"
                    }
                })
                .then((res: any) => {
                    if (res.data) {
                        resolve(res.data.map((e: any) => ({ value: `${e.LocalizedName},${e.Country.LocalizedName},${e.AdministrativeArea.LocalizedName}`, label: `${e.LocalizedName}, ${e.Country.LocalizedName}, ${e.AdministrativeArea.LocalizedName}` })))
                    }
                })
                .catch(reject);
        });
    }

    useEffect(() => {
        params.setNewValue && params.setNewValue(params.value)
        if (params.value?.city) {
            setFirstLocation({ value: `${params.value?.city},${params.value?.country},${params.value?.state}`, label: `${params.value?.city}, ${params.value?.country}, ${params.value?.state}` })
        } else {
            setFirstLocation(" ")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.value])

    useEffect(() => {
        if ((params.newValue?.text) && textAreaRef && textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    }, [params.newValue])
    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); params.check && handleApiSave() }} className="FieldChange FieldChange__Education" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                {params.value?.id && <img src={Delete} alt="Delete" className="FieldChange__Delete" onClick={handleApiDelete} />}
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Setting} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title" >
                        {params.value?.id ? "Изменить " : "Добавить "}{params.title}
                    </div>
                    <div className="FieldChange__Inputs">
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Название учебного заведения
                            </div>
                            <input required minLength={2} type="text" value={params.newValue?.name} onChange={(event: any) => handleNewValue(event, "name")} />
                        </div>
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Степень
                            </div>
                            <input required minLength={2} type="text" value={params.newValue?.degree} onChange={(event: any) => handleNewValue(event, "degree")} />
                        </div>
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Направление
                            </div>
                            <input required minLength={2} type="text" value={params.newValue?.specialization} onChange={(event: any) => handleNewValue(event, "specialization")} />
                        </div>
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Город
                            </div>
                            {firstLocation && <AsyncSelect
                                onChange={(event: any) => handleNewValue(event, "city")}
                                defaultValue={firstLocation}
                                isClearable
                                isSearchable
                                cacheOptions
                                loadOptions={loadOptions}
                                className="Input__Select"
                                classNamePrefix="SelectSearchInput"
                                placeholder={<div className="SelectSearchInput__Placeholder">Найдите свой город</div>}
                                noOptionsMessage={() => 'Нет данных'}
                                loadingMessage={() => 'Поиск'}
                                required

                            />}
                        </div>
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Дата поступления
                            </div>
                            <select required value={new Date(params.newValue?.studyStart).getFullYear()} onChange={(event: any) => { handleNewValue(event, "studyStart") }}>
                                {createArray(1960, new Date().getFullYear()).map((e: any) =>
                                    <option value={e}>{e}</option>
                                )}
                            </select>
                        </div>
                        <div className="FieldChange__Inputs__Education__Blocks">
                            <div className="FieldChange__Inputs__Education__Blocks__Title">
                                Дата окончания
                            </div>
                            <div className="FieldChange__Inputs__Education__Blocks__Bar">
                                <select required value={new Date(params.newValue?.studyEnd).getFullYear()} onChange={(event: any) => { handleNewValue(event, "studyEnd") }}>
                                    {createArray(new Date(params.newValue?.studyStart).getFullYear() || 1960, 2040).map((e: any) =>
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
                            <textarea required minLength={2} ref={textAreaRef} placeholder={"Расскажите о своем опыте"} value={params.newValue?.text} onChange={(event: any) => handleNewValue(event, "text")} />
                        </div>
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
