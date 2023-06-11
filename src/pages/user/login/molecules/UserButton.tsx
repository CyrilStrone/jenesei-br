import { useEffect, useState } from "react";
import { InSubDelete, InSubPost } from "../logics/InSub";
import "../styles/UserButton.css";
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
            if (e?.id == params?.userValue?.user.id) {
                setCheckMySub(true)
            }
        })
        params?.value?.subscription?.map((e: any) => {
            if (e?.id == params?.userValue?.user?.id) {
                setCheckYourSub(true)
            }
        })
    }, [params.value, params.userValue])
    const handleApiSub = async () => {
        try {
            const result = await InSubPost(params.value.user.id);
            if (result) {
                setCheckMySub(true);
                params.requestInAnotherUser(params.value.user.login)
            } else {
                setCheckMySub(false);
            }
        } catch (error) {
            console.log("handleApiSub error", error)
        }
    }
    const handleApiUnSub = async () => {
        try {
            const result = await InSubDelete(params.value.user.id);
            if (result) {
                setCheckMySub(false);
                params.requestInAnotherUser(params.value.user.login)
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
            <div className="UserButton__Item UserButton__Chat Block__Active">
                Начать чат
            </div>
            {checkYourSub &&
                <div className="UserButton__Item__NotHover UserButton__YourChat Block__Active">
                    Ваш подписчик
                </div>
            }
        </div>
    );
};
