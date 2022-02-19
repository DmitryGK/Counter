import {ChangeEvent, useState} from "react";
import a from './Input.module.css'

type InputPropsType = {
    title: string
    value: number
    onChange: (value: number) => void
}

export const Input = (props: InputPropsType) => {


    const [value, setValue] = useState(0)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseFloat(e.currentTarget.value))
        props.onChange(value)
    }
    return (
        <div>
            {props.title}
            <input type='number' value={value} onChange={onChangeValue} className={a.input}/>
        </div>
    )
}