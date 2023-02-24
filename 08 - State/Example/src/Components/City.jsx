import React from 'react';

export default class City extends React.Component {

    state = {
        city: 'Zagreb',
        country: 'Croatia'
    }

    changeState = () => {
        const newCity = this.state.city === 'Zagreb' ? 'Osijek' : 'Zagreb';
        this.setState({ city: newCity })
    }

    render() {
        return (
            <div>
                <h1>Grad: {this.state.city}</h1>
                <p>Država: {this.state.country}</p>
                <button onClick={this.changeState}>Drugi grad</button>
            </div>
        )
    }

}