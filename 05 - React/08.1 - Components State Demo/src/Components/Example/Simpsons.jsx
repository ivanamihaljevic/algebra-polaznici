import React from 'react';

export default class Marge extends React.Component {
    state = {
        name: "Lisa",
        bestFriend: "Janey Powell",
        lovesSchool: true
    };

    changeCharacter = () => {
        this.setState({ name: "Bart", bestFriend: "Milhouse", lovesSchool: false })
    }

    render() {
        return <Lisa name={this.state.name} bestFriend={this.state.bestFriend} lovesSchool={this.state.lovesSchool} buttonClick={this.changeCharacter} />
    }
}


class Lisa extends React.Component {
    render() {
        return (
            <div>
                <p>Hi, my name is {this.props.name}. My best friend is {this.props.bestFriend} and my mother is Marge Simpson.
                    I really, really {this.props.lovesSchool ? "do love school." : "don't love school."}</p>
                <button onClick={this.props.buttonClick}>Change character</button>
            </div>
        );
    }
}