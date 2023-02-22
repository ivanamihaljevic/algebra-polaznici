import React from 'react';

// Funkcionalna komponenta
function WelcomeFunkcion() {
  return <h1>Welcome! Komponenta definirana funkcijom.</h1>;
}

// Klasna komponenta
class WelcomeClass extends React.Component {
  render() {
    return <h2>Welcome! Komponenta definirana klasom.</h2>;
  }
}

// Funkcionalna komponenta APP
export default function App() {
  return (
    <div>
      <WelcomeFunkcion />
      <WelcomeClass />
    </div>
  );
}
