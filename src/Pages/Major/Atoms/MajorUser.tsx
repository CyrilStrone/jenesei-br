import {useStore} from "effector-react";
import React from "react";
import {$userTopHomeJob, $userTopHomePicture, $userTopHomeStackes} from "../../../Common/hooksHome";
import {$userTopHomeShortDescription} from "../../../Common/hooksHome";
import {$userTopHomeName} from "../../../Common/hooksHome";

export const MajorUser = () => {
    const userTopHomeName = useStore($userTopHomeName);
    const userTopHomeJob = useStore($userTopHomeJob);
    const userTopHomeStackes = useStore($userTopHomeStackes);
    const userTopHomeShortDescription = useStore($userTopHomeShortDescription);
    const userTopHomePicture = useStore($userTopHomePicture);

    return (
        <div className="MajorUser__Block">
            <img src={userTopHomePicture} className="MajorUser__Ava" alt="Картинка"/>
            <div className="MajorUser">
                <div className="MajorUser_JobAndName">
                    <div className="MajorUser_JobAndName_Name">
                        {userTopHomeName}
                    </div>
                    <div className="MajorUser_JobAndName_Job">
                        {userTopHomeJob}
                    </div>
                </div>
                <div className="MajorUser_ShortDescription">
                    {userTopHomeShortDescription}
                </div>
                <div className="MajorUser_Stackes">
                    {userTopHomeStackes.map((e, i) => (
                        <img src={"../../public/Icons/Design/" + e + ".svg"} alt=""/>
                    ))}
                </div>
            </div>
        </div>
    );
};
