import React from 'react';

/*
* In JavaScript, class methods are not bound by default. 
* If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
* This is not React-specific behavior; it is a part of how functions work in JavaScript. 
* Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
* Learn more: https://stackoverflow.com/questions/53846717/this-handlechange-this-handlechange-bindthis
*/

export default class FormsSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value,
        })
    }

    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.name);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}