import "../styles/UserSecurityItemFirst.css";

export interface IUserSecurityItemFirst {
    view: boolean
}
export const UserSecurityItemFirst = (params: IUserSecurityItemFirst) => {

    return (
        <div className="UserSecurityItem UserSecurityItemFirst">
            <div className="UserSecurityItemFirst__Title UserSecurityItem__Title">
                {params.view && "Уровень доступа"}
            </div>
            <div className="UserSecurityItem__CheckBar">
                <div className="UserSecurityItem__CheckBar__Item UserSecurityItemFirst__CheckBar__Item">
                    {params.view && "Все пользователи"}
                </div>
                <div className="UserSecurityItem__CheckBar__Line">

                </div>
                <div className="UserSecurityItem__CheckBar__Item UserSecurityItemFirst__CheckBar__Item">
                    {params.view && "Авторизованные пользователи"}
                </div>
                <div className="UserSecurityItem__CheckBar__Line">

                </div>
                <div className="UserSecurityItem__CheckBar__Item UserSecurityItemFirst__CheckBar__Item">
                    {params.view && "Не авторизованные пользователи"}
                </div>
            </div>
        </div>
    );
};
