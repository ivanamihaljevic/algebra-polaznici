import React from 'react';

/*
* You can also use an ES6 class to define a component:
*/

export default class ClassComponent extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

// The two (functional & class) components are equivalent from React’s point of view.