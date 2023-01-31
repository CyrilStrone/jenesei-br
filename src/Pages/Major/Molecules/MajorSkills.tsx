import React from "react";
import {useStore} from "effector-react";
import {$generalSkill} from "../../../Common/hooksGeneral";
import { Link } from "react-router-dom";

export const MajorSkills = () => {
    //    const [passwordCheck, setPasswordCheck] = useState(false);
    const generalSkill = useStore($generalSkill);

    return (
        <div className="MajorSkills">
            <div className="MajorSkills__Title">
                Осуществляйте поиск специалистов, по подходящим Вам компетенциям
            </div>
            <div className="MajorSkills__Block">
                <div className="MajorSkills__Block__Title">
                    ПРЕДЛАГАЕМЫЕ ЗАПРОСЫ ПОИСКА
                </div>
                <div className="MajorSkills__Block__Skills">
                    {generalSkill.map((e: any, id: any) =>
                        id < 7 && <div className="MajorSkills__Block__Skills__Block">{e}</div>
                    )}
                </div>
                <Link
                    className={`MajorSkills__Block__More`}
                    to={"/Search"}
                    >
                    Показать еще
                </Link>
            </div>
        </div>
    );
};
