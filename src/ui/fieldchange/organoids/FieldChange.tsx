import { useStore } from "effector-react";
import { $userSetting, setUserSetting } from "../../functions/Hooks";
import "../styles/FieldChange.css"
import Arrow from '../../../assets/fieldchange/Arrow.svg'

export interface IFieldChange {
    title?: string
    image: string
    type: string
}
export const FieldChange = (params:IFieldChange) => {
    const userSetting = useStore($userSetting);
    return (
        <div className="FieldChange__General" >
            <div className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={()=>setUserSetting(false)}/>
                <div className="FieldChange__Image" >
                </div>
                <div className="FieldChange__Title" >
                    {params.title}
                </div>
                <div className="FieldChange__Inputs" >
                </div>
            </div>
        </div>
    );
};
