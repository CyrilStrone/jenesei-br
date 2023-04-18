import "../styles/Search.css";
import "../styles/SearchPast.css";
import { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { SearchUser } from "../logics/SearchUser";
import { SearchPast } from "../molecules/SearchPast";
import { SearchBar } from "../molecules/SearchBar";



export const Search = () => {
    
    // const usersPastTop = useStore($usersPastTop);
    const [usersPastTopDuplicate, setUsersPastTopDuplicate] = useState<any>([])
    const [value, setValue] = useState<any>({ text: "" });
    // const handleSearch = () => {
    //     let NewCodeItemsDublicat: any[] = [];
    //     // eslint-disable-next-line array-callback-return
    //     usersPastTop.map((e: any) => {
    //         for (let key in e) {
    //             if (e[key] && e[key].toString().toLowerCase().includes(value.text.toLowerCase())) {
    //                 NewCodeItemsDublicat.push(e)
    //                 break
    //             }
    //         }
    //     })
    //     setUsersPastTopDuplicate(NewCodeItemsDublicat ? NewCodeItemsDublicat : null);
    // };


    // useEffect(()=>{
    //     if(usersPastTop){
    //         setUsersPastTopDuplicate(usersPastTop)
    //     }
    // },[usersPastTop])

    // useEffect(() => {
    //     if (value.text === '') {
    //         setUsersPastTopDuplicate(usersPastTop)
    //     } else {
    //         // handleSearch()
    //     }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [value])
    
    return (
        <div className="Search">
            <SearchBar value={value} setValue={setValue}/>
            <SearchPast userList={usersPastTopDuplicate} />
        </div>
    );
};
