import React from "react";
import { MajorUser } from "../Atoms/MajorUser";

export const MajorScroll = () => {
//    const [passwordCheck, setPasswordCheck] = useState(false);

    return (
            <div className="MajorScroll">
                <div className="MajorScroll__Title">
                    Осуществляйте поиск специалистов, по подходящим Вам критериям
                </div>
                <div className="MajorScroll__Block">
                        <MajorUser />
                        <MajorUser />
                        <MajorUser />
                    <div className="MajorScroll__Block__Picture__Absolute">
                        <div className="MajorScroll__Block__Picture__Relative">

                        </div>
                    </div>
                </div>
            </div>
            );
};
