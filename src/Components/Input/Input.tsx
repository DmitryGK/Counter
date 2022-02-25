import {ChangeEvent, useEffect, useState} from "react";
import a from './Input.module.css'

type InputPropsType = {
    title: string
    value: number
    onChange: (value: number) => void
}

export const Input = (props: InputPropsType) => {


    const [value, setValue] = useState(props.value)
    useEffect( () => {
        props.onChange(value)
    }, [value])

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseFloat(e.currentTarget.value))

    }
    return (
        <div>
            {props.title}
            <input type='number' value={props.value} onChange={onChangeValue} className={a.input}/>
        </div>
    )
} 