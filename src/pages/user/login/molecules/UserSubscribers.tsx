import "../styles/UserSubscribers.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ApiImage } from "../../../../ui/functions/AxiosInstance";

export interface IUserSubscribers {
    subscribers: any
}

export const UserSubscribers = (params: IUserSubscribers) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleWheel = (e: any) => {
        if (ref.current) {
            ref.current.scrollLeft += e.deltaY;
        }
    };
    return (
        <div className="UserSubscribers Half__Block Block__Active User__Content__Item">
            <div className="Half__Block__Header">
                Подписчики
            </div>
            <div className="Half__Block__Footer UserSubscribers__LIst" ref={ref} onWheel={handleWheel}>
                {params?.subscribers?.map((e: any) =>
                    <Link to={`/user/${e?.login}`} className="UserSubscribers__Item">
                        <img src={ApiImage + e?.avatarPath} alt="Avatar" className="UserSubscribers__Item__Avatar" />
                        <div className="UserSubscribers__Item__Name">
                            {e?.firstName + " " + e?.lastName}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};
