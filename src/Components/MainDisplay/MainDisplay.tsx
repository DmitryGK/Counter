import {Button} from "../Button/Button";
import React from "react";
import a from './MainDisplay.module.css'

type MainDisplayPropsType = {
    value: number
    incValue:(value:number) => void
    resetValue: (value: number) => void
    maxValue:number
    startValue:number
}



export const MainDisplay = (props:MainDisplayPropsType) => {

    const onChangeValue = () => {
        props.incValue(props.value)
    }
    const onResetValue = () => {
        props.resetValue(props.value)
    }

    return (
        <div className={a.parent}>
            <div className={a.display}>
                {props.value}
            </div>
            <div className={a.buttons}>
                <Button title='inc' onClick={onChangeValue}/>
                <Button title='reset' onClick={onResetValue}/>
            </div>
        </div>
    )
}