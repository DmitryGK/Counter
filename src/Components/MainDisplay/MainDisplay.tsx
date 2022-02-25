import {Button} from "../Button/Button";
import React from "react";
import a from './MainDisplay.module.css'
import {Display} from "./Display";


type MainDisplayPropsType = {
    value: number
    incValue: (value: number) => void
    resetValue: (value: number) => void
    startValue: number
    boolean: boolean
    error: string | null
}


export const MainDisplay = (props: MainDisplayPropsType) => {


    const onChangeValue = () => {
        props.incValue(props.value)
    }
    const onResetValue = () => {
        props.resetValue(props.value)
    }


    return (
        <div className={a.parent}>
            <Display value={props.value}
                     boolean={props.boolean}
                     error={props.error}
            />
            <div className={a.buttons}>
                <Button title='inc' onClick={onChangeValue}/>
                <Button title='reset' onClick={onResetValue}/>
            </div>
        </div>

    )
}