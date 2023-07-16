import {useState} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

export default function MainPage() {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const {title} = useSelector(state => state)

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        dispatch({
            type: 'INPUT_SUBMIT',
            payload: value
        })
        setValue('')
    }

    return (
        <>
            <input type="text" value={value} onChange={handleChange}/>
            <button onClick={handleClick}>submit</button>
            <h1>{title}</h1>
        </>
    )
}