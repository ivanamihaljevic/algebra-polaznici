// Solution of Task 1
import React from 'react';
export default class Characters extends React.Component {

    state = {
        name: 'Lisa',
        bestFriend: 'Janey Powell',
        lovesSchool: true
    }

    changeCharacter = () => {
        this.setState({ name: 'Bart', bestFriend: 'Milhouse Van Houten', lovesSchool: false })
    }

    render() {
        return <Details name={this.state.name} bestFriend={this.state.bestFriend} lovesSchool={this.state.lovesSchool} buttonClick={this.changeCharacter} />
    }
}

class Details extends React.Component {
    render() {
        return (
            <div>
                <p>Hi, my name is {this.props.name}. My best friend is {this.props.bestFriend} and my mother is Marge Simpson. I really, really {this.props.lovesSchool ? 'do like school' : 'do not like school'}.</p>
                <button onClick={this.props.buttonClick}>Change Character</button>
            </div>
        )
    }
}