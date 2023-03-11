import React from 'react';
export default class Forms extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ime: '',
            prezime: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.name)
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        alert(`The user is ${this.state.name} ${this.state.surname}`)
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' name='ime' onChange={this.handleChange} />
                </label>

                <label>
                    Surname:
                    <input type='text' name='prezime' onChange={this.handleChange} />
                </label>

                <button type='submit'>Submit</button>
            </form>
        )
    }

}