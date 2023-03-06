import React from 'react';
import { UserChildren, UserClass, UserFunction } from './user';

const users = [
  { name: 'Ivan', years: 30 },
  { name: 'Marko', years: 35 },
  { name: 'Ana', years: 25 },
];

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserClass name={users[2].name} years={users[2].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          A hobi mi je plivanje.
        </UserChildren>
      </div>
    );
  }
}
