import './Counter.css'
import { useState } from 'react'

function Counter({by}) {

    const [count, setCount] = useState(0);

    function incrementFunction() {
        setCount(count + by)
    }
    function decrementFunction() {
        if (count !== 0) {
            setCount(count - by)
        }
    }
    return (
        <div className="Counter">
            <span className="count">{ count }</span>
            <button className="counterButton"
                onClick={incrementFunction}
            >+{by}</button>
            <button className="counterButton"
                onClick={decrementFunction}
            >-{by}</button>
        </div>
    )
}
export default Counter