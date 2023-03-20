import React from 'react';

// Stateless component which uses props
export default class Week extends React.Component {
    render() {
        return <h3>Today is {this.props.day}.</h3>
    }
}