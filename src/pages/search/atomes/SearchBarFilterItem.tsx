import '../styles/SearchBarFilterItem.css'

interface ISearchBarFilterItem {
    id: number
    name: string
    array: any
    localCheck: boolean
    count: number
    ItemClick: (id: number, localCheck: boolean) => void
}

export const SearchBarFilterItem = (params: ISearchBarFilterItem) => {

    return (
        <div onClick={() => { params.ItemClick(params.id, params.localCheck) }} className={params.localCheck ? "SearchBarFilterItem__Active SearchBarFilterItem" : "SearchBarFilterItem"}>
            {params.name}
            {params.count !== 0 &&
                <div className='SearchBarFilterItem__Count'>
                    {params.count}
                </div>
            }
        </div>
    );
};
