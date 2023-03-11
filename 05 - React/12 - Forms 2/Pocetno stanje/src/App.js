import React from 'react';
import { User } from './user';

export default class App extends React.Component {
  state = {
    users: [
      { id: 1, name: 'Ivan', years: 30 },
      { id: 2, name: 'Marko', years: 35 },
      { id: 3, name: 'Ana', years: 25 },
    ],
  };

  handleButtonPress = () => {
    const { users } = this.state;

    const newUsers = users.map(user => {
      return { ...user, years: user.years + 1 };
    });

    this.setState({ users: newUsers });
  };

  handleNameChange = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];

    newUsers[index].name = event.target.value;
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button onClick={this.handleButtonPress}>Promjena godina</button>

        {users.map((user, index) => (
          <User
            key={user.id}
            name={user.name}
            years={user.years}
            onNameChange={event => this.handleNameChange(event, index)}
          />
        ))}
      </div>
    );
  }
}
