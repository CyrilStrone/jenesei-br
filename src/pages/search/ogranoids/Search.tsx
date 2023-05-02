import "../styles/Search.css";
import "../styles/SearchPast.css";
import { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { SearchUser } from "../logics/SearchUser";
import { SearchPast } from "../molecules/SearchPast";
import { SearchBar } from "../molecules/SearchBar";



export const Search = () => {
    const [usersPastTopDuplicate, setUsersPastTopDuplicate] = useState<any>([])
    const [value, setValue] = useState<any>({ text: "" });
    const requestSearchUser = async () => {
        try {
            await setUsersPastTopDuplicate(SearchUser());
        } catch {

        }
    }
    // useEffect(()=>{
    //     requestSearchUser();
    // },[])
    return (
        <div className="Search">
            <SearchBar value={value} setValue={setValue} />
            <SearchPast userList={usersPastTopDuplicate} />
        </div>
    );
};
