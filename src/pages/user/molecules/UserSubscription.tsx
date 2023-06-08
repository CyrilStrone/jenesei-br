import "../styles/UserSubscription.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ApiImage } from "../../../ui/functions/AxiosInstance";

export interface IUserSubscription {
    subscription: any
}

export const UserSubscription = (params: IUserSubscription) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleWheel = (e: any) => {
        if (ref.current) {
            ref.current.scrollLeft += e.deltaY;
        }
    };
    return (
        <div className="UserSubscription Half__Block Block__Active User__Content__Item">
            <div className="Half__Block__Header">
                Подписки
            </div>
            <div className="Half__Block__Footer UserSubscription__LIst" ref={ref} onWheel={handleWheel}>
                {params?.subscription?.map((e: any) =>
                    <Link to={`/user/${e?.login}`} className="UserSubscription__Item">
                        <img src={ApiImage + e?.avatarPath} alt="Avatar" className="UserSubscription__Item__Avatar" />
                        <div className="UserSubscription__Item__Name">
                            {e?.firstName + " " + e?.lastName}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};
