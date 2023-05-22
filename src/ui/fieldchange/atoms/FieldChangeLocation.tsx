import { setUserSetting } from "../../functions/Hooks";
import { useEffect, useState } from "react";
import { IFieldChange } from "../organelles/FieldChange";
import Arrow from '../../../assets/fieldChange/Arrow.svg'
import Setting from '../../../assets/userChange/Setting.svg'
import { inLocationCity, inLocationCountry, inLocationState } from "../logics/inLocation";
import { inApiSaveLocation } from "../logics/inApiSave";
import { SpinningCircles } from "react-loading-icons";

export const FieldChangeLocation = (params: IFieldChange) => {

    const [valueLocation, setValueLocation] = useState<any>()
    const [valueLocationChoice, setValueLocationChoice] = useState<any>({ country: "", state: "", city: "" })
    const handleApiSave = async () => {
        try {
            const result = await inApiSaveLocation({ country: (valueLocationChoice.country).split(',')[1], state: (valueLocationChoice.state).split(',')[1], city: (valueLocationChoice.city).split(',')[1] });
            if (result) {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("error", error)
        }
    }
    const handleLoactionChange = (event: any, type: any) => {
        if (type === "country") {
            setValueLocationChoice((prevState: any) => ({
                ...prevState,
                country: event.target.value,
                state: "",
                city: ""
            }))
        } else if (type === "state") {
            setValueLocationChoice((prevState: any) => ({
                ...prevState,
                state: event.target.value,
                city: "",
            }))
        } else if (type === "city") {
            setValueLocationChoice((prevState: any) => ({
                ...prevState,
                city: event.target.value,
            }))
        }
    };
    const handleCountry = async () => {
        try {
            const result = await inLocationCountry()
            if (result) {
                setValueLocation({ ...valueLocation, country: result })
            }
        } catch (error) {
            console.log("handleCountry", error)
        }
    }
    const handleState = async (countryCode: string) => {
        try {
            const result = await inLocationState(countryCode.split(',')[0])
            if (result) {
                setValueLocation({ ...valueLocation, state: result })
            }
        } catch (error) {
            console.log("handleState", error)
        }
    }
    const handleCity = async (countryCode: string, division1Code: string) => {
        try {
            const result = await inLocationCity(countryCode.split(',')[0], division1Code.split(',')[0])
            if (result) {
                setValueLocation({ ...valueLocation, city: result })
            }
        } catch (error) {
            console.log("handleCity", error)
        }
    }
    useEffect(() => {
        if (valueLocation && valueLocation.country && valueLocationChoice.country  !== "") {
            handleState(valueLocationChoice.country)
        }
    }, [valueLocationChoice.country])
    useEffect(() => {
        if (valueLocation && valueLocation.country && valueLocationChoice.state) {
            handleCity(valueLocationChoice.country, valueLocationChoice.state)
        }
    }, [valueLocationChoice.state])
    useEffect(() => {
        handleCountry()
    }, [params.keyName])
    return (
        <div className="FieldChange__General" >
            {valueLocation && valueLocation.country ?
                <div className="FieldChange" >
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
                            <div className="FieldChange__Inputs__LocationBlock">
                                <div className="FieldChange__Inputs__LocationBlock__Title">
                                    Страна
                                </div>
                                <select value={valueLocationChoice.country || "Выберите страну"} onChange={(event: any) => { handleLoactionChange(event, "country") }}>
                                    <option style={{ display: "none" }} value={"Выберите город"}>{"Выберите страну"}</option>
                                    {valueLocation && valueLocation.country && valueLocation.country.map((e: any) =>
                                        <option value={`${e.countryCode},${e.name}`}>{e.name}</option>
                                    )}
                                </select>
                            </div>
                            {valueLocationChoice.country && valueLocation.state &&
                                <div className="FieldChange__Inputs__LocationBlock">
                                    <div className="FieldChange__Inputs__LocationBlock__Title">
                                        Регион
                                    </div>
                                    <select value={valueLocationChoice.state || "Выберите регион"} onChange={(event: any) => { handleLoactionChange(event, "state") }}>
                                        <option style={{ display: "none" }} value={"Выберите город"}>{"Выберите регион"}</option>
                                        {valueLocation.state.edges.map((e: any) =>
                                            <option value={`${e.node.division1Code},${e.node.name}`}>{e.node.name}</option>
                                        )}
                                    </select>
                                </div>
                            }
                            {valueLocationChoice.country && valueLocationChoice.state && valueLocation.city &&
                                <div className="FieldChange__Inputs__LocationBlock">
                                    <div className="FieldChange__Inputs__LocationBlock__Title">
                                        Город
                                    </div>
                                    <select value={valueLocationChoice.city || "Выберите город"} onChange={(event: any) => { handleLoactionChange(event, "city") }}>
                                        <option style={{ display: "none" }} value={"Выберите город"}>{"Выберите город"}</option>
                                        {valueLocation && valueLocation.city && valueLocation.city.edges.map((e: any) =>
                                            <option value={`${e.node.division1Code},${e.node.name}`}>{e.node.name}</option>
                                        )}
                                    </select>
                                </div>
                            }


                        </div>
                    </div>
                    <div className="FieldChange__Button__Group">
                        <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                            Отменить
                        </div>
                        <div className={valueLocationChoice.city ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} onClick={() => { valueLocationChoice.city && handleApiSave() }}>
                            Сохранить
                        </div>
                    </div>
                </div> :
                <SpinningCircles height="2em" fill="#0E8AC3" stroke="#000" strokeOpacity={.125} speed={1} />
            }
        </div>
    );
};