import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dateFormatting_Y, dateFormatting_YMD } from '../../../Helpers/utils';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function Episodes() {

    let params = useParams();
    const [episode, setEpisode] = useState({});
    const [active, setActive] = useState(true);

    useEffect(() => {
        fetch(`${url}/tv/${params.tvID}/season/${params.seasonID}/episode/${params.episodeID}?api_key=${api_key}&include_adult=false&append_to_response=videos,similar,credits,recommendations,images,release_dates,content_ratings,external_ids&include_image_language=en,null`)
            .then(response => response.json())
            .then(data => setEpisode(data))
    }, [])

    document.title = `${episode.name} (${new Date(episode.air_date).toLocaleString('en-US', dateFormatting_Y)}) | Streamer`;

    return (
        <>
            <div className='custom-container-bg'>
                <img className='bg-image' src={`https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces${episode.still_path}`} alt={episode.name} />
            </div>
            <div className='custom-container'>
                <img className='title-img' src={`https://image.tmdb.org/t/p/w500${episode.still_path}`} alt={episode.name} />
                <h3>{episode.name}</h3>

                {!!episode.overview &&
                    <div className={active ? 'read-more' : 'read-less'}>
                        <p className='title-overview'>{episode.overview}</p>
                        <button className='read-more-btn' onClick={() => setActive(!active)}>{active ? 'Read More' : 'Read Less'}</button>
                    </div>
                }

                <div className='details'>
                    <h5>Air Date</h5>
                    <p>{new Date(episode.air_date).toLocaleString('en-US', dateFormatting_YMD)}</p>
                </div>
            </div>
        </>
    )
}