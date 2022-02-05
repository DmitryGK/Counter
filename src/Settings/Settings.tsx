import {Button} from "../Counter/Components/Button";
import s from './../../src/Counter/Counter.module.css'

export const Settings = () => {
    return (
        <div>
            <div>
                   <div>max value: <input/></div>
                   <div>start value: <input/></div>
            </div>
            <div>
                <Button title='set' className={s.button} onClick={() => {}}/>
            </div>
        </div>
    )
}