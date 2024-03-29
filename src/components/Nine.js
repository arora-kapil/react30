import React, { useState } from 'react'

function Nine() {

    const [backgroundColor, setBackgroundColor] = useState('pink');

    const handleClick = () => {
        const newColor = (backgroundColor === 'pink' ? 'red' : 'pink');
        setBackgroundColor(newColor)
    }

    return (
        <div style={{ backgroundColor, width: '200px', height: '200px', cursor: 'pointer' }} onClick={handleClick}>
            Click me to change my color
        </div>
    )
}

export default Nine