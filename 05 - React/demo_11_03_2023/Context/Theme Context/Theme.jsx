import React, { useState } from 'react';
import ClassContextComponent from './ClassContextComponent';

export const ThemeContext = React.createContext();
export default function Theme() {

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <div>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ClassContextComponent />
            </ThemeContext.Provider>
        </div>
    )

}