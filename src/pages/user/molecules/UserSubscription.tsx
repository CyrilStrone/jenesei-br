import { Link } from "react-router-dom";
import "../styles/UserSubscription.css";
export interface IUserSubscription{
    subscription:any
}
export const UserSubscription = (params:IUserSubscription) => {

    return (
        <div className="UserSubscription Half__Block Block__Active User__Content__Item">
            <div className="Half__Block__Header">
                Подписки
            </div>
            <div className="Half__Block__Footer UserSubscription__LIst">
                {params?.subscription?.map((e: any) =>
                    <Link to={`/:${e?.login}`} className="UserSubscription__Item">
                        <img src="" alt="" className="UserSubscription__Item__Avatar" />
                        <div className="UserSubscription__Item__Name">
                            {e?.firstName + " " + e?.lastName}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};
