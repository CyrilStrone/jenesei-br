import { useEffect, useState } from "react";
import styles from "../styles/Checker.module.css"; // Импорт CSS-модуля

export interface IChecker {
    value: boolean
    onClick: any

    checkerWidth?: string
    checkerHeight?: string
    checkerBorderRadius?: string

    checkerTrueBackground?: string
    checkerTrueBoxShadow?: string

    checkerFalseBackground?: string
    checkerFalseBoxShadow?: string

    checkerCircleWidth?: string
    checkerCircleHeight?: string
    checkerCircleBorderRadius?: string
    checkerCircleBorder?: string
    checkerCircleBoxShadow?: string

    checkerCircleTrueBackground?: string
    checkerCircleFalseBackground?: string

    sideFaces?: number
}

const Checker = (params: IChecker) => {
    const [value, setValue] = useState<any | null>(null)
    useEffect(() => {
        setValue({
            checkerWidth: params.checkerWidth || "26px",
            checkerHeight: params.checkerHeight || "15px",
            checkerBorderRadius: params.checkerBorderRadius || "11px",

            checkerTrueBackground: params.checkerTrueBackground || "linear-gradient(180deg,rgba(102, 102, 102, 0.75) 0%,rgba(102, 102, 102, 0) 67.71%), #0e8ac3",
            checkerTrueBoxShadow: params.checkerTrueBoxShadow || "0px 0.5px 2.5px 0px rgba(102, 102, 102, 0.75) inset",

            checkerFalseBackground: params.checkerFalseBackground || "rgba(0, 0, 0, 0.09)",
            checkerFalseBoxShadow: params.checkerFalseBoxShadow || "0px 0.5px 1.5px 0px rgba(0, 0, 0, 0.12) inset, 0px 0px 1px 0px rgba(0, 0, 0, 0.02) inset",

            checkerCircleWidth: params.checkerCircleWidth || "12px",
            checkerCircleHeight: params.checkerCircleHeight || "12px",
            checkerCircleBorderRadius: params.checkerCircleBorderRadius || "100px",
            checkerCircleBorder: params.checkerCircleBorder || "0.5px solid rgba(0, 0, 0, 0.02)",
            checkerCircleBoxShadow: params.checkerCircleBoxShadow || "0px 0.20000000298023224px 0.25px 0px rgba(0, 0, 0, 0.12)",

            checkerCircleTrueBackground: params.checkerCircleTrueBackground || "#fff",
            checkerCircleFalseBackground: params.checkerCircleFalseBackground || "#fff",

            sideFaces: params.sideFaces || 1
        })
        return () => {
            setValue(null)
        }
    }, [params])
    return (
        value && <div className={styles.Checker} onClick={params.onClick}
            style={
                params.value ?
                    {
                        width: value.checkerWidth,
                        height: value.checkerHeight,
                        borderRadius: value.checkerBorderRadius,

                        background: value.checkerTrueBackground,
                        boxShadow: value.checkerTrueBoxShadow
                    } :
                    {
                        width: value.checkerWidth,
                        height: value.checkerHeight,
                        borderRadius: value.checkerBorderRadius,

                        background: value.checkerFalseBackground,
                        boxShadow: value.checkerFalseBoxShadow
                    }
            }

        >
            <div className={styles.Checker__Circle}
                style={
                    params.value ?
                        {
                            width: value.checkerCircleWidth,
                            height: value.checkerCircleHeight,
                            borderRadius: value.checkerCircleBorderRadius,
                            border: value.checkerCircleBorder,
                            background: value.checkerCircleTrueBackground,
                            marginLeft: value.sideFaces + "px"
                        } :
                        {
                            width: value.checkerCircleWidth,
                            height: value.checkerCircleHeight,
                            borderRadius: value.checkerCircleBorderRadius,
                            border: value.checkerCircleBorder,
                            background: value.checkerCircleFalseBackground,
                            marginLeft: `calc(${value.checkerWidth} - ${value.checkerCircleWidth} - ${value.sideFaces * 2}px)`
                        }
                }>
            </div>
        </div>
    );
};

export default Checker;