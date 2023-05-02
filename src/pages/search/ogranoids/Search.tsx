import "../styles/Search.css";
import "../styles/SearchPast.css";
import { useState } from "react";
import { SearchPast } from "../molecules/SearchPast";
import { SearchBar } from "../molecules/SearchBar";



export const Search = () => {
    const [usersPastTopDuplicate, setUsersPastTopDuplicate] = useState<any>([])
    const [value, setValue] = useState<any>({ text: "" });
    return (
        <div className="Search">
            <SearchBar value={value} setValue={setValue} />
            <SearchPast userList={usersPastTopDuplicate} />
        </div>
    );
};
