import React from "react";
import { SearchPast } from "../Molecules/SearchPast";
import "../Styles/Search.css";
import "../Styles/SearchPast.css";
import SearchPicture from "../../../Common/Assets/Search/Search.svg";
import FilterPicture from "../../../Common/Assets/Search/Filter.svg";

export const Search = () => {
    let ChangeSearch = (term: any) => {
        console.log(term.target.value)
    };
    return (
        <div className="Search">
            <div className="Search-input">
                <img src={SearchPicture} />
                <input type="search" placeholder={"Поиск пользователей"} onChange={(event: any) => ChangeSearch(event)} />
                <div className="Search-input_Filter">
                    <img src={FilterPicture} />

                </div>
            </div>

            <div className="Search_VeryPeople_Past">Пользователи</div>
            <SearchPast />
        </div>
    );
};
