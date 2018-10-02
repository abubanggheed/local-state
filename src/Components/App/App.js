import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    user: { name: 'Eli', city: 'Minneapolis' },
  }

  handleNameChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value,
      }
    });
  }
  handleCityChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        city: event.target.value,
      }
    });
  }
  handleClick = () => {
    console.log(this.state.user);
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.user.name}</p>
        <br />
        <input value={this.state.user.name} onChange={this.handleNameChange} />
        <br />
        <input value={this.state.user.city} onChange={this.handleCityChange} />
        <p>{this.state.user.name} is from {this.state.user.city}</p>
        <button onClick={this.handleClick}>Log</button>
      </div>
    );
  }
}

export default App;
