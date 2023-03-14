import React, { useState, useEffect } from 'react';

/*
You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. 
We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.
*/

export default function Effects() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    useEffect(() => {
        console.log("another useEffect call");
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}