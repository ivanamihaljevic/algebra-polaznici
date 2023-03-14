import React from 'react';
import { ThemeContext } from './Theme';

export default class ClassContextComponent extends React.Component {

    themeStyles(darkTheme) {
        return {
            backgroundColor: darkTheme ? '#333' : '#CCC',
            color: darkTheme ? '#CCC' : '#333',
            padding: '4rem',
            margin: '2rem'
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>
                        <h1>Hello, Class Context</h1>
                    </div>
                }
                }
            </ThemeContext.Consumer>
        )
    }

}