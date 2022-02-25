import a from "./MainDisplay.module.css";
import React from "react";


type DisplayPropsType = {
    value: number
    boolean:boolean
}



export const Display = (props: DisplayPropsType) => {
    return <div className={a.display}>
        {props.value}
    </div>
}