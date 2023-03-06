import React from 'react';

export default class City extends React.Component {
    state = {
        city: "Zagreb",
        state: "Hrvatska"
    }

    changeState = () => {
        const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
        this.setState({ city: newCity });
    }

    // Do not mutate state directly. Use setState()!

    // dontChangeLikeThis = () => {
    //     const newCity = this.state.city === "Zagreb" ? "Zagreb" : "Osijek";
    //     this.state.city = newCity;
    // }

    render() {
        return (
            <div>
                <h1>Grad: {this.state.city}</h1>
                <p>Država: {this.state.state}</p>
                <button type="button" onClick={this.changeState}>Drugi grad</button>
            </div>
        );
    }
}