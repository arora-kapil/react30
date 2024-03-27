import React from 'react'
import { useState } from 'react';

function Three() {
    const [input, setInput] = useState("");
    return (
        <div className='myContainer'>
            <input value={input} onChange={(event) => setInput(event.target.value)} />
            <p>User Input:
                <br />
                {input}
            </p>
        </div>
    )
}

export default Three