import React, {ChangeEvent, useState} from 'react';

export type InputValuePropsType = {
    title: string
    value: number
    onChange: (value: number) => void
}

export const InputValue = (props: InputValuePropsType) => {

    const [value, setValue] = useState(0)

    function onChangeValueHandler (e:ChangeEvent<HTMLInputElement>) {
        setValue(parseFloat(e.currentTarget.value))
    }

    return (
        <div>
            {props.title}
            <input value={props.value} type='number' onChange={onChangeValueHandler}/>
        </div>
    )
}