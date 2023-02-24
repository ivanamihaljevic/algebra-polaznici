import React from 'react';

export default class Car extends React.Component {

    state = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'Red',
        year: 1964
    }

    changeState = () => {
        this.setState({ model: 'Fiesta', color: 'Blue', year: 2021 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.brand}</h1>
                <p>The selected car is a {this.state.brand} {this.state.model} from {this.state.year}. The color of the car is {this.state.color}</p>
                <button onClick={this.changeState}>Change the car</button>
            </div>
        )
    }

}