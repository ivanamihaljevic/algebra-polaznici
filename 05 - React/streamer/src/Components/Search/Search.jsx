import React, { useState } from 'react';
import { Form, FormControl, Button, Card, Row } from 'react-bootstrap';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function Search() {
    const [results, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [query, setQuery] = useState('');

    function search(e) {
        e.preventDefault()
        fetch(`${url}/search/multi?api_key=${api_key}&include_adult=false&language=en-US&query=${query}`)
            .then(response => response.json())
            .then(data => setResults(data))
            .then(setLoaded(true))
    }

    if (!loaded) {
        return (
            <>
                <div className='custom-container-search'>
                    <h3 className='search-title'>What are you searching for?</h3>
                    <p className='search-help-text'>Search for movies, TV shows, and actors.</p>
                    <Form className='d-flex' onSubmit={search}>
                        <FormControl type='text' placeholder='Enter search term...' className='input-search' name='query' onChange={(e) => setQuery(e.target.value)} />
                        <Button type='submit' className='search'>Search</Button>
                    </Form>
                </div>
            </>
        )
    } else {
        return (
            document.title = `${query} | Streamer`,
            <div className='search-results'>
                <h3 className='results-title'>Here are some search results for {query}</h3>
                <p className='results-subtitle'>Not what you were searching for? <a href='search'>Try again</a></p>
                <Row>
                    {results.results?.map(result => (
                        <div className='mapped-results col-sm-3 col-sm-pull-12' key={result.id}>
                            <Card className='h-100'>
                                <a href={`/view/${result.media_type}/${result.id}`} style={{ display: 'block', margin: '1 rem 0' }}>
                                    <img src={`https://image.tmdb.org/t/p/w342${result.poster_path ?? result.profile_path}`} alt={result.title ?? result.name} />
                                </a>
                                <span className='show-title'>
                                    {result.title ?? result.name}
                                </span>
                            </Card>
                        </div>
                    ))}
                </Row>
            </div>
        )
    }
}