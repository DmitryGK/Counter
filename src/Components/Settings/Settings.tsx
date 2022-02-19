import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import React from "react";
import a from './Settings.module.css'

type SettingsPropsType = {
    maxValueTitle: string
    startValueTitle: string
    changeStartValue: (startValue: number) => void
    changeMaxValue:(maxValue: number) => void
    changeValue:(value: number) => void
    maxValue: number
    startValue: number
    setError: (value: string | null) => void

}



export const Settings = (props:SettingsPropsType) => {

    const setValues = () => {
        props.changeValue(props.startValue)
    }


    return (
        <div className={a.parent}>
            <div className={a.inputs}>
                <Input title={props.maxValueTitle} value={props.maxValue} onChange={props.changeMaxValue}/>
                <Input title={props.startValueTitle} value={props.startValue} onChange={props.changeStartValue}/>
            </div>
            <div className={a.button}>
                <Button title='set' onClick={setValues}/>
            </div>

        </div>
    )
}