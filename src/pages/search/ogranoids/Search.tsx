import { useEffect, useState } from "react";
import "../styles/Search.css";
import "../styles/SearchPast.css";
import { useStore } from "effector-react";
import { $usersPastTop } from "../../../common/HomeHooks";
import { SearchUser } from "../logics/SearchUser";
import { SearchPast } from "../molecules/SearchPast";
import { SearchBar } from "../molecules/SearchBar";

export const requestSearchUser = async () => {
    await SearchUser();
}

export const Search = () => {
    const usersPastTop = useStore($usersPastTop);
    const [usersPastTopDublicat, setUsersPastTopDublicat] = useState<any>([])
    const [value, setValue] = useState<any>({ text: "" });
    
    useEffect(()=>{
      requestSearchUser()
    },[])

    useEffect(()=>{
        if(usersPastTop){
            setUsersPastTopDublicat(usersPastTop)
        }
    },[usersPastTop])
    
    useEffect(()=>{
        console.log("usersPastTopDublicat",usersPastTopDublicat)
    },[usersPastTopDublicat])
    


    const handleSearch = () => {
        let NewCodeItemsDublicat: any[] = [];
        usersPastTop.map((e: any) => {
            for (let key in e) {
                if (e[key] && e[key].toString().toLowerCase().includes(value.text.toLowerCase())) {
                    NewCodeItemsDublicat.push(e)
                    break
                }
            }
        })
        setUsersPastTopDublicat(NewCodeItemsDublicat ? NewCodeItemsDublicat : null);
    };

    useEffect(() => {
        if (value.text === '') {
            setUsersPastTopDublicat(usersPastTop)
        } else {
            handleSearch()
        }
    }, [value])
    
    return (
        <div className="Search">
            <SearchBar value={value} setValue={setValue}/>
            <SearchPast userList={usersPastTopDublicat} />
        </div>
    );
};
