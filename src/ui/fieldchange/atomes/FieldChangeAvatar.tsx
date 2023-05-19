import { setUserSetting } from "../../functions/Hooks";
import { IFieldChange } from "../organoids/FieldChange";
import { useEffect, useState } from "react";
import AvatarEditor from 'react-avatar-editor'
import Arrow from '../../../assets/fieldchange/Arrow.svg'
import Avatar from '../../../assets/userchange/Avatar.svg'
import { inApiSaveAvatar } from "../logics/inApiSave";

export const FieldChangeAvatar = (params: IFieldChange) => {
    const [valueAvatar, setValueAvatar] = useState<any>("")
    const handleApiSave = async () => {
        try {
            const result = await inApiSaveAvatar({ file: valueAvatar });
            if (result) {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("handleApiSave", error);
        }
    }
    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setValueAvatar(event.target.files[0])
            params.setNewValue && params.setNewValue(URL.createObjectURL(event.target.files[0]))
        }
    };
    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); params.check && handleApiSave() }} className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Avatar} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title__Image FieldChange__Title" >
                        {params.title}
                    </div>
                    <div className="FieldChange__Inputs">
                        <div className="FieldChange__Inputs__Avatar">
                            <AvatarEditor
                                image={params.newValue || params.value}
                                width={250}
                                height={250}
                                border={10}
                                color={[14, 138, 195, 0.5]}
                                scale={params.newValue?.scale || params.value?.scale}
                                rotate={0}
                                borderRadius={900}
                            />
                        </div>
                    </div>
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    <input
                        id="file-input"
                        type="file"
                        onChange={handleAvatarChange}
                        accept="image/*"
                        style={{ display: "none" }}
                    />
                    <label htmlFor="file-input" className="FieldChange__Button__Group__Avatar">
                        Изменить
                    </label>
                    <input type="submit" className={params.check ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} value="Сохранить" />

                </div>
            </form>
        </div>
    );
};
