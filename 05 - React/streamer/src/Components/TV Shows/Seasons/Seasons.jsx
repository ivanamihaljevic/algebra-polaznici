import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dateFormatting_Y, dateFormatting_YMD } from '../../../Helpers/utils';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function Seasons() {
    let params = useParams();
    const [seasons, setSeasons] = useState({});
    const [active, setActive] = useState(true);

    useEffect(() => {
        fetch(`${url}/tv/${params.tvID}/season/${params.seasonID}?api_key=${api_key}&include_adult=false&append_to_response=videos,similar,credits,recommendations,images,release_dates,content_ratings,external_ids&include_image_language=en,null`)
            .then(response => response.json())
            .then(data => setSeasons(data))
    }, [])

    document.title = `${seasons.name} (${new Date(seasons.air_date).toLocaleString('en-US', dateFormatting_Y)}) | Streamer`;

    return (
        <>
            <div className='custom-container-bg'>
                <img className='bg-image' src={`https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces${seasons.poster_path}`} alt={seasons.name} />
            </div>
            <div className='custom-container'>
                <img className='title-img' src={`https://image.tmdb.org/t/p/w500${seasons.poster_path}`} alt={seasons.name} />

                {!!seasons.overview &&
                    <div className={active ? 'read-more' : 'read-less'}>
                        <p className='title-overview'>{seasons.overview}</p>
                        <button className='read-more-btn' onClick={() => setActive(!active)}>{active ? 'Read More' : 'Read Less'}</button>
                    </div>
                }

                <div className='details'>
                    <h5>Episodes</h5>
                    <div className='scroll-tray no-animation' style={{ paddingLeft: '0px' }}>
                        {seasons.episodes?.map(episode => (
                            <div key={episode.id}>
                                <a href={`${seasons.season_number}/episode/${episode.episode_number}`}>
                                    {!episode.still_path ? <img src='https://placehold.co/133x200' alt={episode.name}/> : <img src={`https://image.tmdb.org/t/p/w342${episode.still_path}`} alt={episode.name} />}
                                    <br />
                                    <span className='show-title'>
                                        {episode.name?.substring(0, 20)}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}