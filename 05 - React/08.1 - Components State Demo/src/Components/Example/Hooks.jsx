import React, { useState } from 'react'; // Import useState Hook from React (this lets us keep a local state in a function component)

export default function Hooks() {

    // Declared a new state variable called "count"
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(24);
    const [fruit, setFruit] = useState('apple');

    /* Calling the useState declates a "state variable". We can pass to the useState an argument -> 
    the initial value of the state. 
    /*

    /*
    * Rules: 
    * 1. Do not call hooks inside loops, conditions, nested functions. Only call them at top level.
    * 2. Only call hooks from React function components. Don't call them from regular JS functions.
    */

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <hr />
            <p>The user Nino is {age} years old.</p>
            <button onClick={() => setAge(age + 1)}>Increase Nino's age</button>
            <hr />
            <p>Nino's favorite fruit is {fruit}.</p>
            <button onClick={() => setFruit('mango')}>Set to mango</button>
        </div>
    );
}