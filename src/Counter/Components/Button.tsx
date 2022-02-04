import React from "react";

type ButtonType = {
    title: string
}


export const Button = (props: ButtonType) => {
    return (
        <button>
            {props.title}
        </button>
    )

}