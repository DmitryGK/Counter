import React from "react";

type ButtonType = {
    title: string
    className: string
    onClick: (value: number) => void
}


export const Button = (props: ButtonType) => {


    let onClickHandler = () => {
        return (
            props.onClick
        )
    }

    return (
        <button className={props.className} onClick={onClickHandler}>
            {props.title}
        </button>
    )

}