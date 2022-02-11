import {Button} from "../Components/Button";
import s from './../../src/Counter/Counter.module.css'
import {InputValue} from "../Components/InputValue";
import {ChangeEvent, useState} from "react";


type SettingsPropsType = {
    setValue: (value: number) => void
    setMaxValueNumber: (value: number) => void
    setStartValueNumber: (value: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(0)


    function changeMaxValue (newValue: number) {
       setMaxValue(newValue)
    }
    function changeStartValue (newValue: number) {
        setStartValue(newValue)
    }
    // const setValues = () => {
    //     changeMaxValue();
    //     changeStartValue()
    // }

    return (
        <div>
            <div>
                <InputValue title='max value'
                            value={maxValue}
                            onChange={changeMaxValue}
                />
                <InputValue title='start value'
                            value={startValue}
                            onChange={changeStartValue}
                />
            </div>
            <div>
                <Button title='set' className={s.button} onClick={changeMaxValue}/>
            </div>
        </div>
    )
}

