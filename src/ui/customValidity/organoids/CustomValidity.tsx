import "../styles/CustomValidity.css";

import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";
import { useEffect } from "react";

export const $customValidityShow = createStore("")
export const setCustomValidityShow = createEvent<string>()
$customValidityShow.on(setCustomValidityShow, (_, val) => val)

export const CustomValidity = () => {
    const customValidityShow = useStore($customValidityShow);
    useEffect(()=>{
        if(customValidityShow)
        setTimeout(() => setCustomValidityShow(""),4000);
    },[customValidityShow])
    return (
        customValidityShow ?
        <div className="CustomValidity__General">
             <div className="CustomValidity Transparent__Block  Block__NonActive">
                {customValidityShow}
            </div>
        </div>
           
            : null
    );
};

