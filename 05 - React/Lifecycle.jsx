import React from 'react';

export default class Lifecycle extends React.Component {

    UNSAFE_componentWillMount() {
        console.log('Component will mount');
    }


    componentDidMount(){
        console.log('Component DID mount');
    }


    render() {
        return (
            <div>
                <h3>Hello Mounting Methods</h3>
            </div>
        )
    }


}