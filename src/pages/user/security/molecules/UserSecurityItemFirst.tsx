import "../styles/UserSecurityItemFirst.css";

export const UserSecurityItemFirst = () => {

    return (
        <div className="UserSecurityItem UserSecurityItemFirst">
            <div className="UserSecurityItem__Title">
                Уровни доступа
            </div>
            <div className="UserSecurityItem__CheckBar">
                <div className="UserSecurityItem__CheckBar__Item UserSecurityItemFirst__CheckBar__Item">
                    Все пользователи
                </div>
                <div className="UserSecurityItem__CheckBar__Line">

                </div>
                <div className="UserSecurityItem__CheckBar__Item UserSecurityItemFirst__CheckBar__Item">
                    Авторизованные пользователи
                </div>
                <div className="UserSecurityItem__CheckBar__Line">

                </div>
                <div className="UserSecurityItem__CheckBar__Item UserSecurityItemFirst__CheckBar__Item">
                    Не авторизованные пользователи
                </div>
            </div>
        </div>
    );
};
