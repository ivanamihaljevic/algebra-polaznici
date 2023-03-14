import React from 'react';
export default class FormsSingle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this); 
        // this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.name)
        e.preventDefault();
    }

    render() {
        return (
            // Ako ne bindamo metodu (linija 9, 10) onSubmit={this.handleSubmit} ovo neće raditi
            <form onSubmit={() => this.handleSubmit()}>
                <label>
                    Name:
                    <input type='text' value={this.state.name} onChange={this.handleChange} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        )
    }

}