import React, {useState} from 'react';
import {Settings} from "./Components/Settings/Settings";
import {MainDisplay} from "./Components/MainDisplay/MainDisplay";
import a from './App.module.css'

export function App() {

    const [value, setValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [boolean, setBoolean] = useState(false)
    const [error, setError] = useState<string | null>(null)



    const changeStartValue = (value: number) => {
        let newValue = value + 1
        setBoolean(true)
        if (newValue < 0 || newValue === maxValue) {
            setError('invalid value')
        } setStartValue(newValue)
        setError(null)


    }
    const changeMaxValue = (value: number) => {
        let newValue = value + 1
        setBoolean(true)
        if (newValue < 0 || newValue === startValue){
            setError('invalid value')
        } setMaxValue(newValue)
        setError(null)



    }
    const incValue = (v: number) => {
        if (v < maxValue) {
            setValue(v + 1)
        }
    }
    const resetValue = (v: number) => {
        if (v > startValue) {
            setValue(startValue)
        }
    }
    const changeValue = (v: number) => {
        setValue(startValue)
        setBoolean(false)
    }


    return (
        <div className={a.main}>
            <Settings maxValueTitle='max value:'
                      startValueTitle='start value:'
                      changeStartValue={changeStartValue}
                      changeMaxValue={changeMaxValue}
                      changeValue={changeValue}
                      maxValue={maxValue}
                      startValue={startValue}
                      setError={setError}
            />
            <MainDisplay value={value}
                         startValue={startValue}
                         incValue={incValue}
                         resetValue={resetValue}
                         boolean={boolean}

            />
        </div>
    )
}

