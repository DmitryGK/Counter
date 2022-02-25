import a from "./MainDisplay.module.css";
import React from "react";


type DisplayPropsType = {
    value: number
    boolean: boolean
    error: string | null
}


export const Display = (props: DisplayPropsType) => {
    return (props.boolean)
        ?<div className={a.display}>
            enter values and press 'set'
        </div>
        :<div className={a.display}>
            {props.value}
        </div>

}