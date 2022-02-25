import a from './Button.module.css'

type ButtonPropsType = {
    title: string
    onClick: () => void
}

export const Button = (props:ButtonPropsType) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <div>
            <button className={a.button} onClick={onClickHandler}>{props.title}</button>
        </div>
    )
}