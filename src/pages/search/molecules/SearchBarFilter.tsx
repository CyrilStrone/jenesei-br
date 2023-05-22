import '../styles/SearchBarFilter.css'
import { $generalCountry, $generalPrograms, $generalSkill, $generalSpeciality } from "../../../ui/functions/GeneralHooks";
import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { SearchBarFilterItem } from '../atoms/SearchBarFilterItem';

interface ISearchBarFilter {
    setValue?: React.Dispatch<any>
    value?: any
}


export const SearchBarFilter = (params: ISearchBarFilter) => {
    const generalSpeciality = useStore($generalSpeciality);
    const generalPrograms = useStore($generalPrograms);
    const generalCountry = useStore($generalCountry);
    const generalSkill = useStore($generalSkill);
    const [filter, setFilter] = useState<any>([{ array: generalSpeciality, name: "Специальность", localCheck: false, count:0 }, { array: generalPrograms, name: "Программы", localCheck: false, count:0 }, { array: generalCountry, name: "Страна", localCheck: false, count:0 }, { array: generalSkill, name: "Навыки", localCheck: false, count:0 }]);

    useEffect(() => {
        console.log("filter", filter)
    }, [filter])

    const ItemClick = (id: number,localCheck:boolean) => {
        let updatedFilter = filter.map((obj: any) => ({ ...obj, localCheck: false })).map((obj: any, index: any) => {
            if (index === id) {
                return {
                    ...obj,
                    localCheck: !localCheck,
                };
            } else {
                return obj;
            }
        });
        setFilter(updatedFilter)
    };

    const SelectedItemClick = (id: number, arrayItemId: number, check: boolean) => {
        const updatedFilter = filter.map((parent: any, index: any) => {
            if (index === id) {
                const newChildren = parent.array.map((child: any, index: any) => {
                    if (index === arrayItemId) {
                        return { ...child, check: !check };
                    }
                    return child;
                });
                const count = newChildren.filter((child:any) => child.check).length;
                return { ...parent, array: newChildren, count: count };
            }
            return parent;
        });
        setFilter(updatedFilter)
    };

    return (
        <>
            <div className="SearchBarFilter">
                {filter.map((e: any, id: any) =>
                    <SearchBarFilterItem id={id} ItemClick={ItemClick} count={e.count} name={e.name} array={e.array} localCheck={e.localCheck} />
                )}
            </div>
            {filter.map((e: any, id: any) =>
                e.localCheck &&
                <div className='SearchBarFilter__Array'>
                    {e.array.map((eLocal: any, arrayItemId: number) =>
                        <div
                            className={eLocal.check ? "SearchBarFilter__Array__Item__Active SearchBarFilter__Array__Item" : "SearchBarFilter__Array__Item"}
                            onClick={() => { SelectedItemClick(id, arrayItemId, eLocal.check) }}
                        >
                            {eLocal.name}
                        </div>
                    )}
                </div>
            )
            }
        </>
    );
};
