import { useEffect, useState } from "react";
import { setUserSetting } from "../../functions/Hooks";
import { IFieldChange } from "../organelles/FieldChange";
import { inApiChangePassword } from "../logics/inApiSave";
import { setCustomValidityShow } from "../../customValidity/organelles/CustomValidity";
import Arrow from '../../../assets/settings/leftArrow.svg'
import Password from '../../../assets/userChange/Password.svg'

export const FieldChangePassword = (params: IFieldChange) => {
    const [check, setCheck] = useState<boolean>(false)

    const handleApiSave = async () => {
        try {
            const result = await inApiChangePassword({ currentPassword: params.newValue?.oldPassword, newPassword: params.newValue?.newPassowrd });
            if (result) {
                setCustomValidityShow("Пароль обновлен")
                setUserSetting(false);
            }
        } catch (error) {
            setCustomValidityShow("Ошибка смены пароля")
        }
    }

    const handleNewValue = (event: any, type: any) => {
        params.setNewValue && params.setNewValue((prevState: any) => ({
            ...prevState,
            [type]: event.target.value
        }))
    };
    
    useEffect(() => {
        if (params.newValue && params.newValue?.newPassowrd === params.newValue?.againNewPassword && params.newValue?.oldPassword) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }, [params.newValue])
    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); check && handleApiSave() }} className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Password} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title" >
                        {params.title}
                    </div>
                    <div className="FieldChange__Inputs">
                        <input
                            type={"password"}
                            required
                            value={params.newValue?.oldPassword}
                            onChange={(event: any) => handleNewValue(event, "oldPassword")}
                            placeholder={"Введите старый пароль"}
                        />
                        <input
                            type={"password"}
                            required
                            value={params.newValue?.againNewPassword}
                            onChange={(event: any) => handleNewValue(event, "againNewPassword")}
                            placeholder={"Введите новый пароль"}
                        />
                        <input
                            type={"password"}
                            required
                            value={params.newValue?.newPassowrd}
                            onChange={(event: any) => handleNewValue(event, "newPassowrd")}
                            placeholder={"Повторите новый пароль"}
                        />
                    </div>
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    <input type="submit" className={check ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} value="Сохранить" />
                </div>
            </form>
        </div>
    );
};
