import React from 'react';
import { User, NewUser } from './user';

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

  handleDeleteUser = index => {
    let newUsers = [...this.state.users];
    newUsers.splice(index, 1);

    this.setState({ users: newUsers });
  };

  addNewUser = ({ name, years }) => {
    const newUser = {
      id: `${name}_${new Date().getTime()}`,
      name,
      years,
    };

    this.setState({ users: [...this.state.users, newUser] });
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
            onDelete={() => this.handleDeleteUser(index)}
          />
        ))}

        <NewUser onUserSubmit={this.addNewUser} />
      </div>
    );
  }
}
