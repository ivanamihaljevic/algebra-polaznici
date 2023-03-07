import React, { useState, useEffect } from 'react';
export default function Effects() {

    const [count, setCount] = useState(0);
    const [user, setUser] = useState('Nino')

    /*
     * We declare the count state variable, and then we tell React we need to use an effect. We pass a function to the useEffect Hook. This function we pass is our effect. Inside our effect, we set the document title using the document.title browser API. We can read the latest count inside the effect because it’s in the scope of our function. When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM. This happens for every render, including the first one.
     */

    // Isto kao componentDidMount i componentDidUpdate
    useEffect(() => {
        // Mijenjamo browser title
        console.log(count)
        console.log(user)
    });

    // Kad proslijedimo prazan array, to je isto kao componentDidMount (gdje se kod runna unutar te metode samo jednom)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <p>You Selected {user} times</p>
            <button onClick={() => setUser('John')}>Click Me</button>
        </div>
    )
}