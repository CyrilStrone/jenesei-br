import '../styles/SearchBarFilter.css'
import { useEffect, useState } from 'react';
import { SearchBarFilterItem } from '../atoms/SearchBarFilterItem';
import { inStack } from '../../../ui/fieldChange/logics/inStack';

interface ISearchBarFilter {
    setValue?: React.Dispatch<any>
    value?: any
}

export const SearchBarFilter = (params: ISearchBarFilter) => {
    const [valueApi, setValueApi] = useState<any[]>()
    const [filter, setFilter] = useState<any>();

    const handleValueApi = async () => {
        try {
            const result = await inStack()
            if (result) {
                setValueApi(result.map((e: any) => ({ value: e.name, label: e.name })))
            }
        } catch (error) {
            console.log("handleValueApi", handleValueApi)
        }
    }

    const ItemClick = (id: number, localCheck: boolean) => {
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
                const count = newChildren.filter((child: any) => child.check).length;
                return { ...parent, array: newChildren, count: count };
            }
            return parent;
        });
        setFilter(updatedFilter)
    };
    
    useEffect(() => {
        setFilter([{ array: valueApi, name: "Специальность", localCheck: false, count: 0 }])
    }, [valueApi])
    useEffect(() => {
        handleValueApi()
    }, [])
    return (
        <>
            <div className="SearchBarFilter">
                {filter && filter.map((e: any, id: any) =>
                    <SearchBarFilterItem key={id} id={id} ItemClick={ItemClick} count={e.count} name={e.name} array={e.array} localCheck={e.localCheck} />
                )}
            </div>
            {filter && filter.map((e: any, id: any) =>
                e?.localCheck &&
                <div className='SearchBarFilter__Array' key={id}>
                    {e.array && e.array.length !== 0 && e.array.map((eLocal: any, arrayItemId: number) =>
                        <div
                            className={eLocal?.check ? "SearchBarFilter__Array__Item__Active SearchBarFilter__Array__Item" : "SearchBarFilter__Array__Item"}
                            onClick={() => { SelectedItemClick(id, arrayItemId, eLocal?.check) }}
                        >
                            {eLocal?.label}
                        </div>
                    )}
                </div>
            )
            }
        </>
    );
};
