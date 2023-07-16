import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";


export default function CounterPage(){
    // const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)

    const incr = () => {
        dispatch({
            type: "INCREMENT"
        })
    }
    const decr = () => {
        dispatch({
            type: "DECREMENT"
        })
    }
    const reset = () => {
        dispatch({
            type: "RESET"
        })
    }

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={incr}>+</button>
                <button onClick={reset}>reset</button>
                <button onClick={decr}>-</button>
            </div>
        </>
    )
}