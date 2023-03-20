import React from 'react';

// This is an example of a stateful component
export default class Store extends React.Component {
    // State in this context is a RESERVED property
    state = {
        sell: "anything"
    };

    render(){
        return <h3>I'm selling {this.state.sell}.</h3>
    }

}