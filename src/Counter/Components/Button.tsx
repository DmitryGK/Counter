import React from "react";

type ButtonType = {
    title: string
    className: string
    onClick: () => void
}


export const Button = (props: ButtonType) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.title}
        </button>
    )

}