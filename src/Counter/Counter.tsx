import React, {useState} from 'react';
import s from './Counter.module.css'


type CounterPropsType = {
    value: number
    incValue: () => void
    resetValue: () => void
}


const Counter = (props:CounterPropsType) => {




    return (
        <div className={s.counter}>
            <div className={s.display}>
                <h1 className={props.value === 5 ? s.red : s.number}>{props.value}</h1>
            </div>
            <div className={s.buttons}>


                <button className={props.value === 5? s.disable : s.button} onClick={props.incValue}>
                    inc
                </button>
                <button className={props.value === 0? s.disable : s.button} onClick={props.resetValue}>
                    reset
                </button>
            </div>

        </div>
    )
}


export default Counter


