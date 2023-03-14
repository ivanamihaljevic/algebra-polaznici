import React, { useState } from 'react';
import ClassContextComponent from './ClassContextComponent';
import FunctionalContextComponent from './FunctionalContextComponent';

/*
* As your application grows, the ability to share state amongst them will become an issue. 
* Using context, we can share state amongst all our components without using props. 
* Context provides a way to pass data through the component tree without having to pass props down manually at every level.
*/

// PROVIDER: Allows us to "declare the data that we want available troughout our component tree".
// CONSUMER: Allows "any component in the component tree that needs that data to be able to subscribe to it".

export const ThemeContext = React.createContext(); // Export so it can be used within the app

export default function Theme() {

    // Stateful variable
    const [darkTheme, setDarkTheme] = useState(true); // Toggle for our theme


    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <div>
            <ThemeContext.Provider value={darkTheme}> {/* Accepts a value prop which is the data that you want available to nay of its children who need to consume it */}
                <button onClick={toggleTheme}>Toggle theme</button>
                
                <ClassContextComponent />
                <FunctionalContextComponent />

            </ThemeContext.Provider>
        </div>
    );
}