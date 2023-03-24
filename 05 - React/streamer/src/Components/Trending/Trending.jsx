// React and other libraries
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function Trending(props) {
    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch(`${url}/${props.type}?api_key=${api_key}&include_adult=false`)
            .then(response => response.json())
            .then(data => setData(data))
            .then(setLoaded(true))
    }, [])

    if (!loaded) {
        return <div>Loading data...</div>
    } else {
        return (
            <div id='trending-hidden-overflow'>
                <div className={props.animation}>
                    {data.results?.map(data =>
                        <div key={data.id}>
                            <a href={`${props.link}/${data.id}`} className='scroll-tray-link' style={{ display: 'block' }}>
                                <img src={`https://image.tmdb.org/t/p/w342${data.poster_path ?? data.profile_path}`} alt={data.title ?? data.name} style={{ display: 'block' }} className='scroll-tray-image scroll-tray-link' />
                                <p className='results-subtitle custom-button-season'>{data.title ?? data.name}<span className='separator'>/</span></p>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    }

}