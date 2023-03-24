import React from 'react';

// Stateful component - THIS IS A PARENT
export default class FootballResult extends React.Component {
    state = {
        resultHajduk: 0,
        resultDinamo: 0
    };

    /* The state changes (a +1 is added to the count) every time a changeResult() 
    method is invoked - in our case, everytime a user clicks a button */
    changeResultHajduk = () => {
        this.setState({ resultHajduk: this.state.resultHajduk + 1 });
    }

    changeResultDinamo = () => {
        this.setState({ resultDinamo: this.state.resultDinamo + 1 });
    }

    render() {
        return (
            <div>
                {/* Sends state to the stateless (child) component via props */}
                <ShowResult resultDinamo={this.state.resultDinamo} resultHajduk={this.state.resultHajduk} hajdukScored={this.changeResultHajduk} dinamoScored={this.changeResultDinamo} />
            </div>
        );
    }
}

// Stateless component - THIS IS A CHILD COMPONENT
function ShowResult({ resultDinamo, resultHajduk, dinamoScored, hajdukScored }) {
    return (
        <div>
            {/* Receives state from a stateful (parent) component */}
            <p>Current result of the game is: {resultDinamo} (Dinamo) - {resultHajduk} (Hajduk).</p>
            <button onClick={dinamoScored}>Dinamo scored</button>
            <button onClick={hajdukScored}>Hajduk scored</button>
        </div>
    );
}