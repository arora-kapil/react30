import React from 'react'

function Four() {
    const items = ['Reena', 'Anmol', 'Ankush', 'Mehak', 'Kapil', 'Shefali', 'Arshit'];
    return (
        <ul>
            {items.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}

export default Four