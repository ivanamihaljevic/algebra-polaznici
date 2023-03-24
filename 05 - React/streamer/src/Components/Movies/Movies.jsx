import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { dateFormatting_Y, dateFormatting_YMD } from '../../Helpers/utils';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function Movies() {
    const params = useParams();

    // Custom State
    const [movie, setMovie] = useState({});
    const [active, setActive] = useState(true);

    useEffect(() => {
        fetch(`${url}/movie/${params.movieID}?api_key=${api_key}&include_adult=false&append_to_response=videos,similar,credits,recommendations,images,release_dates,content_ratings,external_ids&include_image_language=en,null`)
            .then(response => response.json())
            .then(data => setMovie(data))
    }, [])

    document.title = `${movie.title} (${new Date(movie.release_date).toLocaleString('en-US', dateFormatting_Y)}) | Streamer`

    return (
        <>
            <div className='custom-container-bg'>
                <img className='bg-image' src={`https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces${movie.backdrop_path}`} alt={movie.title} />
            </div>

            <div className='custom-container'>
                <img className='title-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title} ({new Date(movie.release_date).toLocaleString('en-US', dateFormatting_Y)})</h3>
                <p className='details'>{movie.tagline}</p>

                <div className={active ? 'read-more' : 'read-less'}>
                    <p className='title-overview'>{movie.overview}</p>
                    <button className='read-more-btn' onClick={() => setActive(!active)}>{active ? 'Read More' : 'Read Less'}</button>
                </div>

                <div className='holder'>
                    {movie.homepage && <a href={movie.homepage} className='custom-button-inverted'>Visit Website</a>}
                    <a href={`/rate/movie/${movie.id}`} className='custom-button-inverted animated'>Rate Movie</a>
                </div>

                <div className='details'>
                    {!!movie.vote_average &&
                        <>
                            <h5>Audience Score</h5>
                            <p>{movie.vote_average?.toFixed(1)}/10</p>
                        </>
                    }

                    {!!movie.release_date &&
                        <>
                            <h5>Release Date</h5>
                            <p>{new Date(movie.release_date).toLocaleString('en-US', dateFormatting_YMD)}</p>
                        </>
                    }

                    <h5>Cast</h5>
                    <ul className='dashed'>
                        {movie.credits?.cast.map(cast =>
                            <li key={cast.id}><a href={`/view/person/${cast.id}`} className='custom-button-season'>{cast.original_name}</a> as {cast.character}</li>
                        )}
                    </ul>

                    <h5>Genres</h5>
                    <ul className='dashed'>
                        {movie.genres?.map(genres =>
                            <li key={genres.id}>{genres.name}</li>
                        )}
                    </ul>

                    {!!movie.revenue &&
                        <>
                            <h5>Revenue</h5>
                            <p>${movie.revenue?.toLocaleString('de-DE')}</p>
                        </>
                    }

                    {!!movie.budget &&
                        <>
                            <h5>Budget</h5>
                            <p>${movie.budget?.toLocaleString('de-DE')}</p>
                        </>
                    }

                    <h5>Similar Movies</h5>
                    <div className='scroll-tray no-animation' style={{ paddingLeft: '0px' }}>
                        {movie.recommendations?.results.map(results => (
                            <div key={results.id}>
                                <a href={`/view/movie/${results.id}`}>
                                    {!results.poster_path ? <img src='https://placehold.co/133x200' alt={results.title} className='scroll-tray-image' /> : <img src={`https://image.tmdb.org/t/p/w342${results.poster_path}`} alt={results.title} className='scroll-tray-image' />}
                                    <br />
                                    <span className='show-title'>
                                        {results.title?.substring(0, 20)}
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