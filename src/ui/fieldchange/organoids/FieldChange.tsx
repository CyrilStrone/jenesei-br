import { useStore } from "effector-react";
import { $userSetting, setUserSetting } from "../../functions/Hooks";
import "../styles/FieldChange.css"
import Arrow from '../../../assets/fieldchange/Arrow.svg'
import Profile from '../../../assets/userchange/Profile.svg'
import Position from '../../../assets/userchange/Position.svg'
import Password from '../../../assets/userchange/Password.svg'
import birthDate from '../../../assets/userchange/birthDate.svg'
import Message from '../../../assets/userchange/Message.svg'
import Location from '../../../assets/userchange/Location.svg'
import Avatar from '../../../assets/userchange/Avatar.svg'
import Setting from '../../../assets/userchange/Setting.svg'
import { useEffect, useState } from "react";
import { getAllCountries } from "worldpedia/lib/modules/countries";
import { City, State } from 'worldpedia';
import autosize from 'autosize';
import AvatarEditor from 'react-avatar-editor'

export interface IFieldChange {
    title?: string
    keyName?: string
    type?: string
    id?: number
    value?: string
}
export const FieldChange = (params: IFieldChange) => {
    const userSetting = useStore($userSetting);
    const [valueLocation, setValueLocation] = useState<any>()
    const [avatar, setAvatar] = useState<any>({ scale: 1 })
    const [valueLocationChoise, setValueLocationChoise] = useState<any>({ country: "", state: "", city: "" })
    const handleLoactionChange = (event: any, type: any) => {
        if (type == "country") {
            setValueLocationChoise((prevState: any) => ({
                ...prevState,
                country: event.target.value,
                state: "",
                city: ""
            }))
        } else if (type == "state") {
            setValueLocationChoise((prevState: any) => ({
                ...prevState,
                state: event.target.value,
                city: ""
            }))
        } else if (type == "city") {
            setValueLocationChoise((prevState: any) => ({
                ...prevState,
                city: event.target.value
            }))
        }
    };
    useEffect(() => {
        if (params.type === "city") {
            setValueLocation({ ...valueLocation, country: getAllCountries() })
        }
    }, [params.type])
    useEffect(() => {
        if (valueLocation && valueLocation.country && valueLocationChoise.country !== "") {
            setValueLocation({ ...valueLocation, state: State.getAllStatesByCountry(valueLocationChoise.country) })
        }
    }, [valueLocationChoise.country])
    useEffect(() => {
        if (valueLocation && valueLocation.state && valueLocationChoise.state !== "") {
            setValueLocation({ ...valueLocation, city: City.getAllCitiesOfState(valueLocationChoise.state, valueLocationChoise.country) })
        }
    }, [valueLocationChoise.state])
    return (
        <div className="FieldChange__General" >
            <div className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={
                        params.keyName == "avatarPath" ? Avatar :
                            params.keyName == "currentPosition" ? Position :
                                params.keyName == "firstName" ? Profile :
                                    params.keyName == "lastName" ? Profile :
                                        params.keyName == "password" ? Password :
                                            params.keyName == "birthDate" ? birthDate :
                                                params.keyName == "email" ? Message :
                                                    params.keyName == "city" ? Location :
                                                        Setting
                    } />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    {params.type === "img" ?
                        <div className="FieldChange__Title__Image FieldChange__Title" >
                            {params.title}
                        </div> :
                        <div className="FieldChange__Title" >
                            {params.title}
                        </div>}
                    {(params.keyName === "contacts" || params.keyName === "stack" || params.keyName === "education" || params.keyName === "workExp") ?
                        <div className="FieldChange__Inputs">

                        </div> :
                        <div className="FieldChange__Inputs">
                            {params.type === "date" ?
                                <input
                                    type={params.type}
                                    value={params.value && new Date(params.value).toISOString().split('T')[0]}
                                /> :
                                params.type === "password" ?
                                    <>
                                        <input
                                            type={params.type}
                                            value={params.value}
                                            placeholder={"Введите старый пароль"}
                                        />
                                        <input
                                            type={params.type}
                                            value={params.value}
                                            placeholder={"Введите новый пароль"}
                                        />
                                        <input
                                            type={params.type}
                                            value={params.value}
                                            placeholder={"Повторите новый пароль"}
                                        />
                                    </> :
                                    params.type === "city" ?
                                        <>
                                            <div className="FieldChange__Inputs__LocationBlock">
                                                <div className="FieldChange__Inputs__LocationBlock__Title">
                                                    Страна
                                                </div>
                                                <select value={valueLocationChoise.country || "Выберите страну"} onChange={(event: any) => { handleLoactionChange(event, "country") }}>
                                                    <option style={{ display: "none" }} value={"Выберите город"}>{"Выберите страну"}</option>
                                                    {valueLocation && valueLocation.country && valueLocation.country.map((e: any) =>
                                                        <option value={e.iso2}>{e.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                            {valueLocationChoise.country && valueLocation.state && valueLocation.state.length !== 0 &&
                                                <div className="FieldChange__Inputs__LocationBlock">
                                                    <div className="FieldChange__Inputs__LocationBlock__Title">
                                                        Регион
                                                    </div>
                                                    <select value={valueLocationChoise.state || "Выберите регион"} onChange={(event: any) => { handleLoactionChange(event, "state") }}>
                                                        <option style={{ display: "none" }} value={"Выберите город"}>{"Выберите регион"}</option>
                                                        {valueLocation && valueLocation.state && valueLocation.state.map((e: any) =>
                                                            <option value={e.isoCode}>{e.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            }
                                            {valueLocationChoise.country && valueLocationChoise.state && valueLocation.city && valueLocation.city.length !== 0 &&
                                                <div className="FieldChange__Inputs__LocationBlock">
                                                    <div className="FieldChange__Inputs__LocationBlock__Title">
                                                        Город
                                                    </div>
                                                    <select value={valueLocationChoise.city || "Выберите город"} onChange={(event: any) => { handleLoactionChange(event, "city") }}>
                                                        <option style={{ display: "none" }} value={"Выберите город"}>{"Выберите город"}</option>
                                                        {valueLocation && valueLocation.city && valueLocation.city.map((e: any) =>
                                                            <option value={e.name}>{e.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            }
                                        </> :
                                        params.type === "textarea" ?
                                            <textarea onFocus={() => { autosize(document.querySelector('textarea')) }} value={params.value} placeholder={"Расскажите о себе"}></textarea> :
                                            params.type === "img" && params.value ?
                                                <div className="FieldChange__Inputs__Avatar">
                                                    <AvatarEditor
                                                        image={params.value}
                                                        width={250}
                                                        height={250}
                                                        border={10}
                                                        color={[14, 138, 195, 0.5]} // RGBA
                                                        scale={avatar.scale}
                                                        rotate={0}
                                                        borderRadius={900}
                                                    />
                                                    <input
                                                        name="scale"
                                                        type="range"
                                                        onChange={(event: any) => { setAvatar({ ...avatar, scale: event.target.value }) }}
                                                        min='1'
                                                        max="2"
                                                        step="0.01"
                                                        defaultValue="1"
                                                    />
                                                </div>
                                                :
                                                <input
                                                    type={params.type}
                                                    value={params.value}
                                                // placeholder={params.title}
                                                />
                            }
                        </div>
                    }
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    <div className={valueLocationChoise.city ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} >
                        Сохранить
                    </div>
                </div>
            </div>
        </div>
    );
};
