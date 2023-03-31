import '../styles/SearchBarFilter.css'
import { $generalCountry, $generalPrograms, $generalSkill, $generalSpeciality } from "../../../common/GeneralHooks";
import { useStore } from 'effector-react';
import { useState } from 'react';

interface ISearchBarFilter {
    setValue?: React.Dispatch<any>
    value?: any
}


export const SearchBarFilter = (params: ISearchBarFilter) => {
    const generalSpeciality = useStore($generalSpeciality);
    const generalPrograms = useStore($generalPrograms);
    const generalCountry = useStore($generalCountry);
    const generalSkill = useStore($generalSkill);
    const [filter, setFilter] = useState<any>([{ Speciality: generalSpeciality, Name: "Специальность" }, { Programs: generalPrograms, Name: "Программы" }, { Country: generalCountry, Name: "Страна" }, { Skill: generalSkill, Name: "Навыки" }]);

    return (
        <div className="SearchBarFilter">
            {filter.map((e: any) =>
                <div className="SearchBarFilter__Item">{e.Name}
                </div>
            )}
        </div>
    );
};
