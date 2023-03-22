import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function Movies() {
    const [movie, setMovie] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`${url}/movie/${params.movieID}?api_key=${api_key}&include_adult=false&append_to_response=videos,similar,credits,recommendations,images,release_dates,content_ratings,external_ids&include_image_language=en,null`)
            .then(response => response.json())
            .then(data => setMovie(data))
    }, [])

    document.title = `${movie.title} | Streamer`

    return (
        <>
            <h1>{movie.title}</h1>
        </>
    )
}