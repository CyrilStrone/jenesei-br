import "../styles/FieldChange.css"
import "../styles/FieldChangeObject.css"
import { useEffect, useState } from "react";
import { FieldChangeAvatar } from "../atomes/FieldChangeAvatar";
import { FieldChangeCurrentPosition } from "../atomes/FieldChangeCurrentPosition";
import { FieldChangeFirstName } from "../atomes/FieldChangeFirstName";
import { FieldChangeLastName } from "../atomes/FieldChangeLastName";
import { FieldChangePassword } from "../atomes/FieldChangePassword";
import { FieldChangeBirthDate } from "../atomes/FieldChangeBirthDate";
import { FieldChangeEmail } from "../atomes/FieldChangeEmail";
import { FieldChangeLocation } from "../atomes/FieldChangeLocation";
import { FieldChangeLogin } from "../atomes/FieldChangeLogin";
import { FieldChangeAboutShort } from "../atomes/FieldChangeAboutShort";
import { FieldChangeAboutLong } from "../atomes/FieldChangeAboutLong";
import { FieldChangeIsVerified } from "../atomes/FieldChangeIsVerified";
import { FieldChangeContacts } from "../atomes/FieldChangeContacts";
import { FieldChangeStack } from "../atomes/FieldChangeStack";
import { FieldChangeEducation } from "../atomes/FieldChangeEducation";
import { FieldChangeWorkExp } from "../atomes/FieldChangeWorkExp";

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
export const FieldChange = (params: IFieldChange) => {
    const [check, setCheck] = useState<boolean>(false)
    const [newValue, setNewValue] = useState<any | undefined>();
    useEffect(() => {
        return () => {
            setNewValue(undefined)
            setCheck(false)
        }
    }, [])
    useEffect(() => {
        console.log("newValue", newValue, "params.value", params.value)
        if (newValue && (newValue !== params.value)) {
            if (params.value) {
                setCheck(true)
            }
        } else {
            setCheck(false)
        }
    }, [newValue, params.value])
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
                                                        <FieldChangeIsVerified title={params.title} keyName={params.keyName} value={params.value} newValue={newValue} setNewValue={setNewValue} check={check} setCheck={setCheck} /> :
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
