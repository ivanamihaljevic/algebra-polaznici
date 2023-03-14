import React from 'react';

export default class App extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    
    alert(`Poslano je ime ${value}`);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ime:
          <input type='text' value={value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Potvrdi' />
      </form>
    );
  }
}
