import React, {useState} from 'react';
import s from './Counter.module.css'



const Counter = () => {

    let [value, setValue] = useState<number>(0)

    function incValue() {
        let n = value
        if (n < 5) {
            setValue(n + 1)
        } return n
    }

    function resetValue() {
        setValue(0)
    }



    return (
        <div className={s.counter}>
            <div className={s.display}>
                <h1 className={value === 5? s.red: s.number}>{value}</h1>
            </div>
            <div className={s.buttons}>
                <button className={value === 5? s.disable : s.button} onClick={incValue}>
                    inc
                </button>
                <button className={value === 0? s.disable : s.button} onClick={resetValue}>
                    reset
                </button>
            </div>

        </div>
    )
}


export default Counter


