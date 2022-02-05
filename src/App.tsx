import React, {useState} from 'react';
import Counter from "./Counter/Counter";
import {Settings} from "./Settings/Settings";



function App() {

    let [value, setValue] = useState<number>(0)

    function incValue() {
        let n = value
        if (n < 5) {
            setValue(n + 1)
        }
        return n
    }
    function resetValue() {
        setValue(0)
    }

  return (
    <div>
        <Counter value={value} incValue={incValue} resetValue={resetValue}/>
        <Settings/>
    </div>
  );
}

export default App;
