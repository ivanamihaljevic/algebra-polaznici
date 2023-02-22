import React from 'react';

function ConditionalRendering({ number }) {
  const ivan = number === 1 && <h3>Ja sam Ivan!</h3>;

  return (
    <div>
      <h2>Number? {number}</h2>
      {ivan}
      {number === 2 && <h3>Luka!</h3>}
      {number === 3 ? <h3>Marko :)</h3> : null}
    </div>
  );
}

export default class App extends React.Component {
  state = {
    number: null,
  };

  handleButtonClick = number => {
    this.setState({ number });
  };

  render() {
    return (
      <div>
        <span>
          <button onClick={() => this.handleButtonClick(1)}>1</button>
          <button onClick={() => this.handleButtonClick(2)}>2</button>
          <button onClick={() => this.handleButtonClick(3)}>3</button>
        </span>
        <ConditionalRendering number={this.state.number} />
      </div>
    );
  }
}
