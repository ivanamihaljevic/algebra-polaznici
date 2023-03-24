// React and other libraries
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function TrendingList(props) {
    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch(`${url}/trending/${props.type}/${props.timeline}?api_key=${api_key}&include_adult=false`)
            .then(response => response.json())
            .then(data => setData(data))
            .then(setLoaded(true))
    }, [])

    document.title = `Trending ${props.name} | Streamer`;

    if (!loaded) {
        return <div>Loading data...</div>
    } else {
        return (
            <div>
                <div className='search-results'>
                    <h3 className='results-title'>Trending {props.name} this {props.timeline}</h3>
                    <p className='results-subtitle'>Not happy with what's trending? You can always use our search option.</p>
                    {data.results?.map(data =>
                        <div key={data.id} className='mapped-results col-sm-3 col-sm-pull-12'>
                            <a href={`/view/${data.media_type}/${data.id}`}>
                                <Card className='h-100' style={{ margin: '1rem 0' }}>
                                    <img src={`https://image.tmdb.org/t/p/w342${data.poster_path ?? data.profile_path}`} alt={data.title ?? data.name} style={{ display: 'block' }} />
                                    <span className='show-title'>{data.title ?? data.name}</span>
                                </Card>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    }

}