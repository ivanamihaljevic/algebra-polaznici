// React and other libraries
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

// CSS
import './Trending.css';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function TrendingList() {
    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch(`${url}/trending/movie/week?api_key=${api_key}&include_adult=false`)
            .then(response => response.json())
            .then(data => setData(data))
            .then(setLoaded(true))
    }, [])

    document.title = `Trending movies | Streamer`;

    if (!loaded) {
        return <div>Loading data...</div>
    } else {
        return (
            <div className='search-results'>
                <h3 className='results-title'>Trending movies this week</h3>
                <p className='results-subtitle'>Not happy with what's trending? You can always use our search option.</p>
                {data.results?.map(data =>
                    <div key={data.id}>
                        <Card className='h-100'>
                            <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt={data.title} />
                            <span>{data.title}</span>
                        </Card>
                    </div>
                )}
            </div>
        )
    }

}