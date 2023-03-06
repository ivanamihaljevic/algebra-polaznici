import React, { useState } from 'react';

/*
* Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
* What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a 
* Hook that lets you add React state to function components. We’ll learn other Hooks later.
*
* When would I use a Hook? If you write a function component and realize you need to add some state to it, 
* previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!
* Hooks have rules! Learn more about them at https://reactjs.org/docs/hooks-rules.html
*/

export default function Hooks() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    /* 
    The only argument to useState is the initial state. In the example above, it is 0 because our counter starts from zero. 
    Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want. 
    The initial state argument is only used during the first render.
    */

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

/* THIS IS HOW WE WOULD DO IT BEFORE HOOKS! 

class HooksClass extends React.Component {
    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
            </div>
        );
    }
}
*/