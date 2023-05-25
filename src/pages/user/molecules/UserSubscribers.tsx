import { Link } from "react-router-dom";
import "../styles/UserSubscribers.css";
import { apiImage } from "../../../ui/functions/AxiosInstance";
export interface IUserSubscribers {
    subscribers: any
}
export const UserSubscribers = (params: IUserSubscribers) => {

    return (
        <div className="UserSubscribers Half__Block Block__Active User__Content__Item">
            <div className="Half__Block__Header">
                Подписчики
            </div>
            <div className="Half__Block__Footer UserSubscribers__LIst">
                {params?.subscribers?.map((e: any) =>
                    <Link to={`/:${e?.login}`} className="UserSubscribers__Item">
                        <img src={apiImage + e?.avatarPath} alt="Avatar" className="UserSubscribers__Item__Avatar" />
                        <div className="UserSubscribers__Item__Name">
                            {e?.firstName + " " + e?.lastName}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};
