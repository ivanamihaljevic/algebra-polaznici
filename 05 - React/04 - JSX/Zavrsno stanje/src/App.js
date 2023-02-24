import React from 'react';

export default function App() {
  const name = 'Ivan';

  const user = {
    firstName: 'Luka',
    lastName: 'Horvat',
  };

  const formatUser = userData => userData.firstName + ' ' + userData.lastName;

  let friendOrStranger = '';
  if (user.lastName === 'Horvat') {
    friendOrStranger = 'Hello, friend';
  } else {
    friendOrStranger = 'Hello, stranger';
  }

  const friendOrStrangerFunction = userData => {
    if (userData.lastName === 'Horvat') {
      return 'Hello, friend';
    }
    return 'Hello, stranger';
  };

  return (
    <div>
      <h1>Hello world!</h1>
      <h2>Hello, {name}!</h2>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Hello, {formatUser(user)}!</p>
      <h1>{friendOrStranger}</h1>
      <h2>In function: {friendOrStrangerFunction(user)}</h2>
    </div>
  );
}
