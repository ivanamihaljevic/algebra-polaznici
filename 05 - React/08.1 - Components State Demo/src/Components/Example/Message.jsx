import React, { useState } from 'react';

export default function Message() {

    // Declared a new state variable called "message"
    const [message, setMessage] = useState('');

    /*
    Note: event.target gives you the element that triggered the event.
    So, event.target.value retrieves the value of that element (an input field)

    A synthetic event is a cross-browser wrapper around the browser's native event. (e)

    */

    return (
        <div>

            <input type="text" value={message} placeholder="Enter some letters"
                onChange={
                    event => {
                        const val = event.target.value;
                        setMessage(val)
                    }
                } />

            <p>
                <strong>{message}</strong>
            </p>
        </div>
    );
};