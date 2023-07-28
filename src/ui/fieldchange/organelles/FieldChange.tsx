import "../styles/FieldChange.css"
import "../styles/FieldChangeObject.css"
import "../styles/SelectSearchInput.css"
import { useEffect, useState } from "react";
import { FieldChangeAvatar } from "../atoms/FieldChangeAvatar";
import { FieldChangeCurrentPosition } from "../atoms/FieldChangeCurrentPosition";
import { FieldChangeFirstName } from "../atoms/FieldChangeFirstName";
import { FieldChangeLastName } from "../atoms/FieldChangeLastName";
import { FieldChangePassword } from "../atoms/FieldChangePassword";
import { FieldChangeBirthDate } from "../atoms/FieldChangeBirthDate";
import { FieldChangeEmail } from "../atoms/FieldChangeEmail";
import { FieldChangeLocation } from "../atoms/FieldChangeLocation";
import { FieldChangeLogin } from "../atoms/FieldChangeLogin";
import { FieldChangeAboutShort } from "../atoms/FieldChangeAboutShort";
import { FieldChangeAboutLong } from "../atoms/FieldChangeAboutLong";
import { FieldChangeIsVerified } from "../atoms/FieldChangeIsVerified";
import { FieldChangeContacts } from "../atoms/FieldChangeContacts";
import { FieldChangeStack } from "../atoms/FieldChangeStack";
import { FieldChangeEducation } from "../atoms/FieldChangeEducation";
import { FieldChangeWorkExp } from "../atoms/FieldChangeWorkExp";


export interface IFieldChange {
    title?: string
    keyName?: string
    value?: any
    setValue?: any
    newValue?: any
    setNewValue?: React.Dispatch<any>
    check?: boolean
    setCheck?: React.Dispatch<React.SetStateAction<boolean>>
}

//TODO:params.check не всегда срабатывает
//TODO:дата не правильно если вводить
export const FieldChange = (params: IFieldChange) => {
    const [check, setCheck] = useState<boolean>(false)
    const [newValue, setNewValue] = useState<any | undefined>();

    useEffect(() => {
        if (newValue !== params.value) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }, [newValue, params.value])
    
    useEffect(() => {
        return () => {
            setNewValue(undefined)
            setCheck(false)
        }
    }, [])
    return (
        (params.keyName === "avatarPath") ?
            <FieldChangeAvatar title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
            (params.keyName === "currentPosition") ?
                <FieldChangeCurrentPosition title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                (params.keyName === "firstName") ?
                    <FieldChangeFirstName title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                    (params.keyName === "lastName") ?
                        <FieldChangeLastName title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                        (params.keyName === "password") ?
                            <FieldChangePassword title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                            (params.keyName === "birthDate") ?
                                <FieldChangeBirthDate title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                                (params.keyName === "email") ?
                                    <FieldChangeEmail title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                                    (params.keyName === "location") ?
                                        <FieldChangeLocation title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                                        (params.keyName === "login") ?
                                            <FieldChangeLogin title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                                            (params.keyName === "aboutShort") ?
                                                <FieldChangeAboutShort title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                                                (params.keyName === "aboutLong") ?
                                                    <FieldChangeAboutLong title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                                                    (params.keyName === "isVerified") ?
                                                        <FieldChangeIsVerified  /> :
                                                        (params.keyName === "contacts") ?
                                                            <FieldChangeContacts title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                                                            (params.keyName === "stack") ?
                                                                <FieldChangeStack title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                                                                (params.keyName === "education") ?
                                                                    <FieldChangeEducation title={params.title} keyName={params.keyName} value={params.value} setValue={params.setValue} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
                                                                    (params.keyName === "workExp") ?
                                                                        <FieldChangeWorkExp title={params.title} keyName={params.keyName} value={params.value} setValue={params.setValue} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> : null
    );
};
