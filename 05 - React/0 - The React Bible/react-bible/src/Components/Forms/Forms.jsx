import React from 'react';

export default class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // [e.target.name] will pick up the "name" attribute from input field
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.name + this.state.surname);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name='name' onChange={this.handleChange} />
                </label>

                <label>
                    Surname:
                    <input type="text" name='surname' onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}