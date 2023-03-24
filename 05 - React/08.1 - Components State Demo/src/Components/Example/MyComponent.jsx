import React from 'react';

export default class MyComponent extends React.Component {

    state = {
        city: "Zagreb",
        country: "Hrvatska"
    }

    // Original example
    // changeState = () => {
    //     this.setState({ city: "Osijek" })
    // }

    // Modified example
    changeState = () => {
        const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
        this.setState({ city: newCity }) // Always use setState() method in order to change the state
    }


    // Do not change the state like this! Use setState() method instead.
    // dontChangeLikeThis = () => {
    //     this.state.city = "Vukovar";
    // }

    render() {
        return (
            <div>
                <h1>City: {this.state.city}</h1>
                <h1>Country: {this.state.country}</h1>
                <button onClick={this.changeState}>Change city</button>
            </div>
        );
    }

}