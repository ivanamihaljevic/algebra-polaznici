import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

// .env variables
const api_key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export default function Rate(props) {
    const { contentID } = useParams();

    // Custom State
    const [session, setSession] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
        fetch(`${url}/authentication/guest_session/new?api_key=${api_key}`)
            .then(response => response.json())
            .then(data => setSession(data.guest_session_id))
        document.title = `Rate | Streamer`;
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`${url}/${props.type}/${contentID}/rating?api_key=${api_key}&guest_session_id=${session}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'value': `${rating}` })
        }).then(response => response.json())
            .then(data => alert(data.status_message))
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='main'>
            <div className='custom-container-rate'>
                <h1>Thank you for rating this {props.name}.</h1>
                <h3>We're thrilled that you're doing this.</h3>
                <Form className='d-flex' onSubmit={handleSubmit}>
                    <FormControl type='number' placeholder='Enter your rating' className='custom-input' value={rating} onChange={e => setRating(e.target.value)} min='1' max='10' />
                    <Button type='submit' className='custom-button'>Submit</Button>
                </Form>
            </div>
        </div>
    )

}