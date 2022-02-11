import React, {useState} from 'react';
import Counter from "./Counter/Counter";
import {Settings} from "./Settings/Settings";


function App() {

    let [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState(5)
    let [startValue, setStartValue] = useState(0)

    function incValue() {
        let n = value
        if (n < maxValue) {
            setValue(n + 1)
        }
        return n
    }
    function resetValue() {
        setValue(0)
    }

    function changeMaxValue(newValue:number) {
        setMaxValue(newValue)
    }

    function changeStartValue(newValue:number) {
        setStartValue(newValue)
    }


    return (
        <div>
            <Counter
                value={value}
                incValue={incValue}
                resetValue={resetValue}/>
            <Settings setValue={setValue}
                      setMaxValueNumber={changeMaxValue}
                      setStartValueNumber={changeStartValue}
                      />

        </div>
    );
}

export default App;
