import {useStore} from "effector-react";
import { Link } from "react-router-dom";
import { $generalSkill } from "../../../common/GeneralHooks";

export const MajorSkills = () => {
    //    const [passwordCheck, setPasswordCheck] = useState(false);
    const generalSkill = useStore($generalSkill);

    return (
        <div className="MajorSkills">
            <div className="MajorSkills__Title">
                Найдтие подходящего специалиста
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
