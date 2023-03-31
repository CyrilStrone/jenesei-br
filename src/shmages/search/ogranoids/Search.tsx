import { useEffect, useState } from "react";
import "../styles/Search.css";
import "../styles/SearchPast.css";
import SearchPicture from "../../../common/assets/search/Search.svg";
import FilterPicture from "../../../common/assets/search/Filter.svg";
import { useStore } from "effector-react";
import { $usersPastTop } from "../../../scommon/HomeHooks";
import { SearchUser } from "../logics/SearchUser";
import { SearchPast } from "../molecules/SearchPast";

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
    

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prevPerson: any) => ({
            ...prevPerson,
            text: event.target.value
        }));
    };

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
        if (value.text == '') {
            setUsersPastTopDublicat(usersPastTop)
        } else {
            handleSearch()
        }
    }, [value])
    
    return (
        <div className="Search">
            <div className="Search-input">
                <img src={SearchPicture} />
                <input type="search" placeholder={"Поиск пользователей"} value={value.text} onChange={(event: any) => handleTextChange(event)} />
                <div className="Search-input_Filter">
                    <img src={FilterPicture} />

                </div>
            </div>
            <div className="Search_VeryPeople_Past">Пользователи</div>
            <SearchPast userList={usersPastTopDublicat} />
        </div>
    );
};
