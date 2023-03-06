import React, { useState } from 'react';

export default function Hooks() {

    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('Apple');
    const [graduate, setGraduate] = useState(false);

    return (
        <div>
            <p>Initial value of the count variable is {count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <hr />
            <p>Nino's Favorite Fruit Is {fruit}</p>
            <button onClick={() => setFruit('Mango')}>Set to mango</button>
            <hr />
            {!graduate ? 'Is graduate' : 'Is not graduate'}<br/>
            <button onClick={() => setGraduate(true)}>Change graduate</button>
        </div>
    )
}