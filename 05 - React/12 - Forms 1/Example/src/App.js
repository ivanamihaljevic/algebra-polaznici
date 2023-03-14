import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'Placeholder' };
  }

  changeValue = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.value}
            onChange={this.changeValue}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
