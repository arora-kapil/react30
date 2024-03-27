import React, { useEffect, useState } from 'react'

function Six() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])
    return (
        <div>
            {
                data ? (
                    <div>
                        <h1>Title: {data.title}</h1>
                        <h2>{data.body}</h2>
                    </div>
                ) : (
                    <p>
                        Loading
                    </p>
                )
            }
        </div>
    )
}

export default Six