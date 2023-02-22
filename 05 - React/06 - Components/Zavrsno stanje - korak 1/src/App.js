import React from 'react';

function WelcomeFunkcion() {
  return <h1>Welcome! Komponenta definirana funkcijom.</h1>;
}

class WelcomeClass extends React.Component {
  render() {
    return <h2>Welcome! Komponenta definirana klasom.</h2>;
  }
}

export default function App() {
  return (
    <div>
      <WelcomeFunkcion />
      <WelcomeClass />
    </div>
  );
}
