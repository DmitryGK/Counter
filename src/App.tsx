import React, {useState} from 'react';
import {Settings} from "./Components/Settings/Settings";
import {MainDisplay} from "./Components/MainDisplay/MainDisplay";
import a from './App.module.css'

export function App() {

    const [value, setValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const changeStartValue = (startValue: number) => {
        setStartValue(startValue)

    }
    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
    }
    const incValue = (v: number) => {
        if(v < maxValue) {
            setValue(v+1)
        }
    }
    const resetValue = (v: number) => {
        if(v > startValue){
            setValue(startValue)
        }
    }
    const mainValues = (maxValue: number, startValue: number) => {
        return (
            changeStartValue(startValue),
            changeMaxValue(maxValue)
        )
    }
    return (
        <div className={a.main}>
            <Settings maxValueTitle='max value:'
                      startValueTitle='start value:'
                      changeStartValue={changeStartValue}
                      changeMaxValue={changeMaxValue}
                      maxValue={maxValue}
                      startValue={startValue}
                      mainValues={mainValues}
            />
            <MainDisplay value={value}
                         maxValue={maxValue}
                         startValue={startValue}
                         incValue={incValue}
                         resetValue={resetValue}
            />
        </div>
    )
}

