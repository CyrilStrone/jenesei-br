import { setUserSetting } from "../../functions/Hooks";
import { IFieldChange } from "../organoids/FieldChange";
import { useState } from "react";
import autosize from 'autosize';
import AvatarEditor from 'react-avatar-editor'
import Arrow from '../../../assets/fieldchange/Arrow.svg'
import Profile from '../../../assets/userchange/Profile.svg'
import Position from '../../../assets/userchange/Position.svg'
import Password from '../../../assets/userchange/Password.svg'
import birthDate from '../../../assets/userchange/birthDate.svg'
import Message from '../../../assets/userchange/Message.svg'
import Location from '../../../assets/userchange/Location.svg'
import Avatar from '../../../assets/userchange/Avatar.svg'
import Setting from '../../../assets/userchange/Setting.svg'
import { inApiSaveDefautl } from "../logics/inApiSave";

export const FieldChangeDefault = (params: IFieldChange) => {
    const [avatar, setAvatar] = useState<any>({ scale: 1 })
    const handleApiSave = async () => {
        try {
            const result = await inApiSaveDefautl({ value: params.newValue, keyName: params.keyName });
            if (result) {
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
                        </div>
                    }

                    <div className="FieldChange__Inputs">
                        {params.type === "date" ?
                            <input
                                type={params.type}
                                value={!params.newValue ? (params.value && new Date(params.value).toISOString().split('T')[0]) : (new Date(params.newValue).toISOString().split('T')[0])}
                                onChange={handleNewValue}
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
                                params.type === "textarea" ?
                                    <textarea onFocus={() => { autosize(document.querySelector('textarea')) }} value={params.value} placeholder={"Расскажите о себе"}></textarea> :
                                    params.type === "img" && params.value ?
                                        <div className="FieldChange__Inputs__Avatar">
                                            <AvatarEditor
                                                image={params.value}
                                                width={250}
                                                height={250}
                                                border={10}
                                                color={[14, 138, 195, 0.5]}
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
                                            value={!params.newValue ? (params.value && params.value) : params.newValue}
                                            onChange={handleNewValue}
                                        />
                        }
                    </div>
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    {params.type === "date" ?
                        <div className={(params.newValue && (params.newValue !== new Date(params.value).toISOString().split('T')[0])) ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} onClick={() => { (params.newValue && (params.newValue !== new Date(params.value).toISOString().split('T')[0])) && handleApiSave() }}>
                            Сохранить
                        </div>
                        :
                        <div className={(params.newValue && (params.newValue !== params.value)) ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} onClick={() => { (params.newValue && (params.newValue !== params.value)) && handleApiSave() }}>
                            Сохранить
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
