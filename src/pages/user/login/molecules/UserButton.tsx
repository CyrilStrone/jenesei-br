import { useEffect, useState } from "react";
import { InSubDelete, InSubPost } from "../logics/InSub";
import "../styles/UserButton.css";
import { Link } from "react-router-dom";
interface IUserButton {
    value: any
    userValue: any
    requestInAnotherUser: any
}
export const UserButton = (params: IUserButton) => {
    const [checkMySub, setCheckMySub] = useState<boolean>(false)
    const [checkYourSub, setCheckYourSub] = useState<boolean>(false)
    useEffect(() => {
        params?.value?.subscribers?.map((e: any) => {
            if (e?.login == params?.userValue?.user?.login) {
                setCheckMySub(true)
            }
        })
        params?.value?.subscription?.map((e: any) => {
            if (e?.login == params?.userValue?.user?.login) {
                setCheckYourSub(true)
            }
        })
    }, [params.value, params.userValue])
    const handleApiSub = async () => {
        try {
            const result = await InSubPost(params.value.id);
            if (result) {
                setCheckMySub(true);
                params.requestInAnotherUser(params.value.login)
            } else {
                setCheckMySub(false);
            }
        } catch (error) {
            console.log("handleApiSub error", error)
        }
    }
    const handleApiUnSub = async () => {
        try {
            const result = await InSubDelete(params.value.id);
            if (result) {
                setCheckMySub(false);
                params.requestInAnotherUser(params.value.login)
            } else {
                setCheckMySub(true);
            }
        } catch (error) {
            console.log("handleApiUnSub error", error)
        }
    }

    return (
        <div className="UserButton">
            <div className={checkMySub ? "UserButton__Item__Active UserButton__Item UserButton__MySub Block__Active" : "UserButton__Item UserButton__MySub Block__Active"} onClick={() => checkMySub ? handleApiUnSub() : handleApiSub()}>
                {checkMySub ? "Отписаться" : "Подписаться"}
            </div>
            <Link to={`/chat/${params.value.id}`} className="UserButton__Item UserButton__Chat Block__Active">
                Начать чат
            </Link>
            {checkYourSub &&
                <div className="UserButton__Item__NotHover UserButton__YourChat Block__Active">
                    Ваш подписчик
                </div>
            }
        </div>
    );
};
