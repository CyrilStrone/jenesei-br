import "../styles/Checker.css";

export interface IChecker {
    value: boolean
    onClick: any
}

export const Checker = (params: IChecker) => {
    return (
        <div className={params.value ? "Checker__True Checker" : "Checker__False Checker"} onClick={params.onClick}>
            <div className={params.value ? "Checker__Circle__True Checker__Circle" : "Checker__Circle__False Checker__Circle"}>
            </div>
        </div>
    );
};

