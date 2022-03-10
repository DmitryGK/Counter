import React, {useEffect, useState} from 'react';
import {Settings} from "./Components/Settings/Settings";
import {MainDisplay} from "./Components/MainDisplay/MainDisplay";
import a from './App.module.css'

export function App() {

    useEffect(() => {
        let mainValue = localStorage.getItem('counterValue')
        let lastStartValue = localStorage.getItem('startValue')
        let lastMaxValue = localStorage.getItem('maxValue')
        if (mainValue && lastMaxValue && lastStartValue) {
            let newValue = JSON.parse(mainValue)
            let newStartValue = JSON.parse(lastStartValue)
            let newMaxValue = JSON.parse(lastMaxValue)
            setValue(newValue)
            setStartValue(newStartValue)
            setMaxValue(newMaxValue)
        }
    }, [])

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [value, setValue] = useState(startValue)
    const [boolean, setBoolean] = useState(false)
    const [error, setError] = useState<string | null>(null)
    console.log(error)
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [value, maxValue, startValue,])


    const changeStartValue = (value: number) => {
        if (value > 0) {
            setStartValue(value)
            setBoolean(true)
            if (value === maxValue || value > maxValue) {
                setError('incorrect value')
            }
        } else if (value === 0) {
            setStartValue(value)
            setBoolean(true)
            setError(null)
        } else if (value < 0) {
            setStartValue(value)
            setBoolean(true)
            setError('incorrect value')
        }
    }
    const changeMaxValue = (value: number) => {
        if (value > 0) {
            setBoolean(true)
            setMaxValue(value)
            if (value === startValue || value < startValue) {
                setError('incorrect value')
            }
        } else if (value === 0) {
            setMaxValue(value)
            setBoolean(true)
            if (startValue === 0) {
                setError(null)
            } else {
                setError('incorrect value')
            }
        } else if (value < 0) {
            setBoolean(true)
            setMaxValue(value)
            setError('incorrect value')
        }
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
    const changeValue = () => {
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
            />
            <MainDisplay value={value}
                         startValue={startValue}
                         incValue={incValue}
                         resetValue={resetValue}
                         boolean={boolean}
                         error={error}

            />
        </div>
    )
}

