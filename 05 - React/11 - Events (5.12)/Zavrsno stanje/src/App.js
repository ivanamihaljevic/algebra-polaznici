import React from 'react';
import { User } from './user';

export default class App extends React.Component {
  state = {
    users: [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
    ],
  };

  handleButtonPress = () => {
    const { users } = this.state;

    const newUsers = users.map(user => {
      return { ...user, years: user.years + 1 };
    });

    this.setState({ users: newUsers });
  };

  handleNameChange = event => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[0].name = event.target.value;
    this.setState({ users: newUsers });
  };

  render() {
    const { users, children } = this.state;

    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button onClick={this.handleButtonPress}>Promjena godina</button>
        <User
          name={users[0].name}
          years={users[0].years}
          onNameChange={this.handleNameChange}
        />
        <User name={users[1].name} years={users[1].years} />
        <User name={users[2].name} years={users[2].years} />
      </div>
    );
  }
}
