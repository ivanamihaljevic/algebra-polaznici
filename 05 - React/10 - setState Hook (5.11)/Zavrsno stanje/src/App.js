import React from 'react';
import { UserChildren, UserClass, UserFunction } from './user';

export default function App() {
  const [users, setUsers] = React.useState([
    { name: 'Ivan', years: 30 },
    { name: 'Marko', years: 35 },
    { name: 'Ana', years: 25 },
  ]);

  const handleButtonPress = () => {
    const newUsers = users.map(user => {
      return { ...user, years: user.years + 1 };
    });

    setUsers(newUsers);
  };

  return (
    <div>
      <h1>React aplikacija</h1>
      <p>Ovo zbilja radi</p>
      <button onClick={handleButtonPress}>Promjena godina</button>
      <UserFunction name={users[0].name} years={users[0].years} />
      <UserFunction name={users[1].name} years={users[1].years} />
      <UserClass name={users[2].name} years={users[2].years} />
      <UserChildren name={users[2].name} years={users[2].years}>
        A hobi mi je plivanje.
      </UserChildren>
    </div>
  );
}
