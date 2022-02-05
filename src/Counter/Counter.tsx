import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from "./Components/Button";


type CounterPropsType = {
    value: number
    incValue: () => void
    resetValue: () => void
}


const Counter = (props: CounterPropsType) => {


    const incClassName = props.value === 5 ? s.disable : s.button
    const resetClassName = props.value === 0 ? s.disable : s.button

    return (
        <div className={s.counter}>
            <div className={s.display}>
                <h1 className={props.value === 5? s.red : s.number}>{props.value}</h1>
            </div>
            <div className={s.buttons}>
                <Button title='inc' className={incClassName} onClick={props.incValue}/>
                <Button title='reset' className={resetClassName} onClick={props.resetValue}/>
            </div>

        </div>
    )
}


export default Counter


