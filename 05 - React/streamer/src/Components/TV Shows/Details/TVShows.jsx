import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dateFormatting_Y, dateFormatting_YMD } from '../../../Helpers/utils';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function TVShows() {
    let params = useParams();
    const [series, setSeries] = useState({});
    const [active, setActive] = useState(true);

    useEffect(() => {
        fetch(`${url}/tv/${params.tvID}?api_key=${api_key}&include_adult=false&append_to_response=videos,similar,credits,recommendations,images,release_dates,content_ratings,external_ids&include_image_language=en,null`)
            .then(response => response.json())
            .then(data => setSeries(data))
    }, [])

    document.title = `${series.name} (${new Date(series.first_air_date).toLocaleString('en-US', dateFormatting_Y)}) | Streamer`;

    return (
        <>
            <div className='custom-container-bg'>
                <img className='bg-image' src={`https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces${series.backdrop_path}`} alt={series.title} />
            </div>

            <div className='custom-container'>
                <img src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`} alt={series.name} className='title-img' />
                <h3>{series.name} ({new Date(series.first_air_date).toLocaleString('en-US', dateFormatting_Y)})</h3>
                <p className='details'>{series.tagline}</p>

                <div className={active ? 'read-more' : 'read-less'}>
                    <p className='title-overview'>{series.overview}</p>
                    <button className='read-more-btn' onClick={() => setActive(!active)}>{active ? 'Read More' : 'Read Less'}</button>
                </div>

                <div className='holder'>
                    {series.homepage && <a href={series.homepage} className='custom-button-inverted'>Visit Website</a>}
                    <a href={`/rate/tv/${series.id}`} className='custom-button-inverted animated'>Rate TV Show</a>
                </div>

                <div className='details'>
                    {!!series.vote_average &&
                        <>
                            <h5>Audience Score</h5>
                            <p>{series.vote_average.toFixed(1)}/10 (based on {series.vote_count} votes)</p>
                        </>
                    }

                    {!!series.credits?.cast &&
                        <>
                            <h5>Cast</h5>
                            <ul className='dashed'>
                                {series.credits?.cast.map(cast =>
                                    <li key={cast.id}>
                                        <a href={`/view/person/${cast.id}`} className='custom-button-season'>{cast.original_name}</a> as {cast.character}
                                    </li>
                                )}
                            </ul>
                        </>
                    }

                    <h5>First Air Date</h5>
                    <p>{new Date(series.first_air_date).toLocaleString('en-US', dateFormatting_YMD)}</p>

                    <h5>Last Air Date</h5>
                    <p>{new Date(series.last_air_date).toLocaleString('en-US', dateFormatting_YMD)}</p>

                    <h5>Last Episode to Air</h5>
                    <ul className='dashed'>
                        <li key={series.last_episode_to_air?.episode_number}>
                            {series.last_episode_to_air?.name} from season {series.last_episode_to_air?.season_number}
                        </li>
                    </ul>

                    <h5>Seasons</h5>
                    <div className='scroll-tray no-animation' style={{ paddingLeft: '0px' }}>
                        {series.seasons?.map(season => (
                            <div key={season.id}>
                                <a href={`${series.id}/season/${season.season_number}`}>
                                    {!season.poster_path ? <img src='https://placehold.co/133x200' alt={season.name} className='scroll-tray-image' /> : <img src={`https://image.tmdb.org/t/p/w342${season.poster_path}`} alt={season.name} className='scroll-tray-image' />}
                                    <br />
                                    <span className='show-title'>
                                        {season.name?.substring(0, 20)}
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