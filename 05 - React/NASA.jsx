import React, { useState, useEffect } from 'react';

export default function NASA() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => response.json())
            .then(nasaData => setData(nasaData))
    }, [])

    if (!data) {
        return <h1>Loading NASA data....</h1>
    }

    const { title, url, date, explanation } = data;

    return (
        <div className='NASA'>
            <h2>{title}</h2>
            <img src={url} alt={title} />
            <small>{date}</small>
            <p>{explanation}</p>
        </div>
    )
}