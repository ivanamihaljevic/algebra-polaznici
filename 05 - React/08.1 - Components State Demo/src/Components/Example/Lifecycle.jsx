import React from 'react';

export default class Lifecycle extends React.Component {

    componentWillMount() {
        console.log('Component WILL mount!')
    }

    componentDidMount() {
        console.log('Component DID mount!')
    }

    render() {
        return (
            <div>
                <h3>Hello mounting methods! :)</h3>
            </div>
        );
    }

}