import React, {useState, useCallback} from 'react'

export default function Button() {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    },[])
 
    return(
        <div>
            <h2>Counter Button</h2>
            <p>Basic useCallback use</p>
            <p>Counter {count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}