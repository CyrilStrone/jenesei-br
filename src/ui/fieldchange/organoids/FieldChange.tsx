import "../styles/FieldChange.css"
import { FieldChangeArray } from "../molecules/FieldChangeArray";
import { FieldChangeLocation } from "../molecules/FieldChangeLocation";
import { FieldChangeDefault } from "../molecules/FieldChangeDefault";
import { useEffect, useState } from "react";

export interface IFieldChange {
    title?: string
    keyName?: string
    type?: string
    id?: number
    value?: any
    newValue?: any
    setNewValue?: React.Dispatch<any>
}
export const FieldChange = (params: IFieldChange) => {
    const [newValue, setNewValue] = useState<any | null>();
    useEffect(() => {
        return () => {
            setNewValue(null)
        }
    }, [])
    return (
        (params.keyName === "contacts" || params.keyName === "stack" || params.keyName === "education" || params.keyName === "workExp") ?
            <FieldChangeArray setNewValue={setNewValue} newValue={newValue} keyName={params.keyName} title={params.title} type={params.type} id={params.id} value={params.value} />
            :
            params.keyName === "city" ?
                <FieldChangeLocation setNewValue={setNewValue} newValue={newValue} keyName={params.keyName} title={params.title} type={params.type} id={params.id} value={params.value} />
                :
                <FieldChangeDefault setNewValue={setNewValue} newValue={newValue} keyName={params.keyName} title={params.title} type={params.type} id={params.id} value={params.value} />

    );
};
