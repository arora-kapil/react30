import React, { useState } from 'react'

function Two() {
    const [counter, setCounter] = useState(0);
    const add = () => {
        setCounter(counter + 1);
    }

    const subtract = () => {
        setCounter(counter - 1);
    }
    return (
        <div className='container'>
            <button className="btn-primary mx-3" onClick={subtract}>-</button>
            <span>{counter}</span>
            <button className="btn-primary mx-3 ml-3" onClick={add}>+</button>
        </div>
    )
}

export default Two