import React from 'react';

// This is a parent (stateful) component WHICH HAS A STATE!
export default class Yoda extends React.Component {
    state = {
        name: "Yoda"
    };

    render() {
        // We have passed down STATE from PARENT to CHILD component
        return <BabyYoda name={this.state.name} />
    }
}


// This is a child (stateless) component WHICH HAS NO STATE!
class BabyYoda extends React.Component {

    // This child component will render information which was given to it by A PARENT COMPONENT
    render() {
        return <h1>I am {this.props.name}.</h1>
    }
}