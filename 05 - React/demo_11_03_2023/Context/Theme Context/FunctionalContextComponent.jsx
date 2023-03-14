import React, { useContext } from 'react';
import { ThemeContext } from './Theme';

export default function FunctionalContextComponent() {

    const darkTheme = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '4rem',
        margin: '2rem'
    }

    return (
        <div style={themeStyles}>
            <h1>Hello, Context</h1>
        </div>
    )

}