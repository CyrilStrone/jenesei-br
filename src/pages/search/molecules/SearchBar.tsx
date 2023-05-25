import SearchPicture from "../../../assets/search/Search.svg";
import { SearchBarFilter } from "./SearchBarFilter";
import '../styles/SearchBar.css'
interface ISearchBar {
    setValue: React.Dispatch<any>
    value: any
}

export const SearchBar = (params: ISearchBar) => {
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        params.setValue((prevPerson: any) => ({
            ...prevPerson,
            text: event.target.value
        }));
    };
    return (
        <div className="SearchBar">
            <div className="SearchBar__Header Translucent__Block   Block__NonActive">
                <div className="SearchBar__Title">
                    Поиск
                </div>
            </div>
            <div className="SearchBar__Block Transparent__Block Block__NonActive">
                <div className="SearchBar__Input">
                    <input type="text" className="SearchBar__Input__General" placeholder={"Поиск пользователей"} value={params.value.text} onChange={(event: any) => handleTextChange(event)} />
                    <img src={SearchPicture} />
                </div>
                <SearchBarFilter />
            </div>
        </div>
    );
};
