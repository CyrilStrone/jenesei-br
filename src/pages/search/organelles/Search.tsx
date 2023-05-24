import "../styles/Search.css";
import "../styles/SearchPast.css";
import { useEffect, useState } from "react";
import { SearchPast } from "../molecules/SearchPast";
import { SearchBar } from "../molecules/SearchBar";
import { SearchUser } from "../logics/SearchUser";



export const Search = () => {
    const [usersPast, setUsersPast] = useState<any>([])
    const [value, setValue] = useState<any>({ text: "" });
    const handleValueApi = async () => {
        try {
            const result = await SearchUser();
            if (result) {
                setUsersPast(result)
            }
        } catch (error) {
            console.log("handleValueApi error", error)
        }
    }
    useEffect(()=>{
        handleValueApi()
    },[])
    return (
        <div className="Search">
            <SearchBar value={value} setValue={setValue} />
            <SearchPast userList={usersPast} />
        </div>
    );
};
