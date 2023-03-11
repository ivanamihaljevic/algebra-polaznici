import React from 'react';

export default class NewUser extends React.Component {
  state = {
    name: '',
    years: '',
  };

  onNameChange = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  onYearsChange = event => {
    const years = event.target.value;
    this.setState({ years: parseInt(years, 10) });
  };

  handleUserSubmit = event => {
    event.preventDefault();
    const { name, years } = this.state;

    if (name && years) {
      const { onUserSubmit } = this.props;
      onUserSubmit({ name, years });

      this.setState({ name: '', years: '' });
    }
  };

  render() {
    const { name, years } = this.state;

    return (
      <form onSubmit={this.handleUserSubmit}>
        <label>
          Novi korisnik:
          <input
            type="text"
            name="Ime"
            placeholder="Ime"
            onChange={this.onNameChange}
            value={name}
          />
          <input
            type="text"
            name="Godine"
            placeholder="Godine"
            onChange={this.onYearsChange}
            value={years}
          />
        </label>
        <button type="submit">Prihvati</button>
      </form>
    );
  }
}
