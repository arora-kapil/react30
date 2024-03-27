import React, { useState } from 'react'

function Five() {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle((toggle) => !toggle);
    }

    return (
        <div>
            <label>
                <input type='checkbox' onChange={handleClick} />
            </label>
            <p>{toggle ? 'On' : 'Off'}</p>
        </div>
    )
}

export default Five