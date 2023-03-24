import React from 'react';

// Stateless component - THIS IS A CHILD COMPONENT
function ReceivesState({ count, onButtonClick }) {
    return (
        <div>
            {/* Receives state from a stateful (parent) component */}
            <p>Number of clicks: {count}</p>
            <button onClick={onButtonClick}>Click me!</button>
        </div>
    );
}

// Stateful component - THIS IS A PARENT
export default class SendsState extends React.Component {
    state = {
        count: 0
    };

    // constructor(props) {
    //     super(props)
    //     this.state = { count: 0 }
    // }


    /* The state changes (a +1 is added to the count) every time a changeState() 
    method is invoked - in our case, everytime a user clicks a button */
    changeState = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                {/* Sends state to the stateless (child) component via props */}
                <ReceivesState count={this.state.count} onButtonClick={this.changeState} />
            </div>
        );
    }
}